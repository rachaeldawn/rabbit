var fs = require('fs')
var keys = require('lodash').keys
var rimraf = require('rimraf')
var promise = require('bluebird')
var _ = require('lodash')
var models

var DataDirectory = __dirname + "/src/data"

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
    if(!fs.existsSync(DataDirectory))
        fs.mkdirSync(DataDirectory)

    for(var k in Classes) {
        var v = Classes[k]
        if(v.Table.substr('_tag') != undefined)
            fs.writeFile(`${DataDirectory}/${v.Table}.js`, GenerateClassText(v), (err) => { if(err) throw err })
    }
}

function GenerateClassText(obj) {
    var Lines = []
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
    Lines.push(`export default class ${obj.Class} {\n\tconstructor(${props}){`)
    Lines.push(`\tthis.tablename = '${obj.Table}'`)
    for(var k in obj.Properties) {
        Lines.push(`\t\tthis.${obj.Properties[k]} = ${obj.Properties[k]}`)
    }
    Lines.push()
    Lines.push('\t}')
    Lines.push(`}\n`)
    Lines.push(`${obj.Class}.prototype.tablename = '${obj.Table}'`)
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