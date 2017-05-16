var fs = require('fs')
var keys = require('lodash').keys
var rimraf = require('rimraf')
var promise = require('bluebird')
var _ = require('lodash')
var models

var DataDirectory = __dirname + "/data"

function getModelsAPI() {
    return new Promise(
        function(res, rej) {
            fs.readFile('./models.json', 'utf-8', (err, data) => {
                if(err) 
                    rej(err)
                else 
                    res(JSON.parse(data))
            })
        }
    )
}

function GetClassNames(arr) {
    return arr.reduce(
                (prev, current) => {
                    current = current.split('_').reduce(
                        (prev, cur) => {
                            cur = cur[0].toUpperCase() + cur.substr(1)
                             if(prev == undefined) {
                                prev = cur 
                            } else {
                                prev += cur
                            }
                            return prev
                        }, '')
                    prev.push(current)
                    return prev
                }, []
            )
}

function SerializeJsonData(data) {
    var tableNames = keys(data)
    // for(var k in data) {
    //     tableNames.push(k)
    // }
    classNames = GetClassNames(tableNames)
    var Classes = []
    for(var k in classNames) {
        Classes.push({
            Class: classNames[k],
            Table: tableNames[k],
            Properties: [],
            PropertyDescriptions: {},
            SupportsTagging: data[tableNames[k]].SupportTag
        })
        for(var q in data[tableNames[k]].Fields) {
            Classes[k].Properties.push(q)
            Classes[k].PropertyDescriptions[q] = data[tableNames[k]].Fields[q]
        }
        
        switch(_.toLower("" + data[tableNames[k]].DeleteMethod)) {
            case('archive'):
                DeleteMethod = 'archive'
                break
            case('delete'):
                DeleteMethod = 'delete'
                break
            case('false'):
            case('no'):
                break
            default:
                continue
        }
        if(DeleteMethod) Classes[k].Delete = DeleteMethod
        
    }
    return Classes
}

function WriteClassFiles(Classes) {
    if(!fs.existsSync(__dirname + '/data'))
            fs.mkdirSync(__dirname + '/data')

    for(var k in Classes) {
        var v = Classes[k]
        if(v.Table.substr('_tag') != undefined)
            fs.writeFile(`${__dirname}/data/${v.Table}.js`, GenerateClassText(v), (err) => { if(err) throw err })
    }
}

function GenerateClassText(obj) {
    var Lines = []
    Lines.push(`var Data = require("../data")`)
    Lines.push('/*')
    for(var k in obj.PropertyDescriptions) {
        Lines.push(` * @property ${k}: ${obj.PropertyDescriptions[k]}`)
    }
    Lines.push(' */')
    var props = obj.Properties.reduce(
        (prev, current) => {
            if(prev == '') {
                prev = current
            } else {
                prev += ', ' + current
            }
            return prev
        }, ''
    )
    Lines.push(`const tablename = '${obj.Table}'`)
    Lines.push(`class ${obj.Class} {\n\tconstructor(${props}){`)
    for(var k in obj.Properties) {
        Lines.push(`\t\tthis.${obj.Properties[k]} = ${obj.Properties[k]}`)
    }
    Lines.push(`\t\tthis.Update = Data.Update.bind(this.Update, this)`)
    Lines.push(`\t\tthis.Sync = Data.Sync.bind(this.Sync, this)`)
    Lines.push(`\t\tthis.Save = Data.Save.bind(this.Save, this)`)
    Lines.push(`\t\tthis.Delete = Data.Delete.bind(this.Delete, this)`)
    Lines.push('\t}')
    Lines.push(`}\n`)
    Lines.push(`${obj.Class}.prototype.tablename = tablename`)
    Lines.push(`${obj.Class}.Delete = Data.Delete.bind(${obj.Class}.Delete)`)
    Lines.push(`${obj.Class}.Page = Data.Page.bind(${obj.Class}.Page)`)
    Lines.push(`${obj.Class}.List = Data.List.bind(${obj.Class}.List)`)
    Lines.push(`${obj.Class}.Save = Data.Save.bind(${obj.Class}.Save)`)
    Lines.push(`${obj.Class}.Sync = Data.Sync.bind(${obj.Class}.Sync)`)
    Lines.push(`${obj.Class}.Search = Data.Search.bind(${obj.Class}.Search)`)
    Lines.push(`${obj.Class}.Update = Data.Update.bind(${obj.Class}.Update)`)
    Lines.push(`module.exports = ${obj.Class}`)
    Lines.push(`module.exports.tablename = tablename`)
    return Lines.reduce(
        (prev, cur) => {
            prev += cur + '\n'
            return prev
        }, ''
    )
}

function generateClassFile() {
    getModelsAPI()
        .then(SerializeJsonData)
        .then(WriteClassFiles)
        .catch(err => { throw err })
}

generateClassFile()