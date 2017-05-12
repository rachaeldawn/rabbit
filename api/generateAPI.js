var fs = require('fs')
var path = require('path')
var rimraf = require('rimraf')
var promise = require('promise')
var clone = require('lodash').clone

function makeFolders() {
    return new Promise(function(resolve, reject) {
        fs.mkdir(__dirname + '/test', (err) => {
            err && err.code != 'EEXIST' && reject(err)
            resolve()
        })
        
    })
}

function getData(obj) {
    return new Promise(function(resolve, reject) {
        return fs.readFile('specification.json', 'utf-8',function(err, data) {
            err && reject(err)
            !err && resolve(JSON.parse(data))
        })
    })
}

function startGenerator(data) {
    return new Promise(
        function(resolve, reject) {
            if(typeof data != typeof {}) {
                reject('Need an actual object')
                return
            }
            var files = []
            for(var k in data) {
                fs.writeFile(path.join(__dirname, data[k].folder, data[k].filename) + '.js', generateClassFile(data[k], k), function(err) {
                    if(err) {
                        reject(err)
                        return
                    }
                })
                fs.writeFile(path.join(__dirname, 'test', data[k].filename + '.js'), generateTestFile(data[k], k), function(err){
                    if(err) {
                        reject(err)
                        return
                    }
                })
            }
            resolve()
        }
    )
}

var tabber = function(tabLevel) {
    var ret = ''
    for(i = 0; i < tabLevel; i++) {
        ret += '\t'
    }
    return ret
}

function LinesToString(Lines) {
    return Lines.reduce(
        function (prev, cur) {
            prev += cur + '\n'
            return prev
        }, ''
    )
}

function generateClassFile(obj, key) {
    var tabLevel = 0
    var tabs = function() {
        return tabber(tabLevel)
    }
    
    var paramsList = function(func) {
        var keys = []
        for(var k in func.params) {
            if(func.params[k].default != undefined) {
                keys.push(`${k} = ${func.params[k].default}`)
            } else {
                keys.push(k)
            }
        }
        keys = keys.reduce(
            function(prev, cur) {
                if(prev == undefined) {
                    prev = cur
                } else {
                    prev += ', ' + cur
                }
                return prev
            }, undefined
        )
        return keys || ''
    }
    var param = function(par) {
        if(typeof par == typeof {}) {
            return `${par.comment} (default: ${par.default})`
        } 
        return par
    }
    var static = function(func) {
        if(func.static == undefined)
            return ''
        if(func.static == 'both' || func.static == true) {
            return 'static '
        }
        return ''
    }
    var Lines = []
    for(var k in obj.dependencies) {
        Lines.push(`const ${k} = require("${obj.dependencies[k]}")`)
    }
    if(obj.type == 'router') {
        Lines.push(`\nvar route = require('express').Router()`)
    }
    Lines.push('\n')
    if(obj.type == 'class') {
        Lines.push('/*')
        Lines.push(` * Class: ${key}`)
        tabLevel += 1
        if(obj.functions['constructor'] != undefined) {
            Lines.push(` * ${tabs()}Purpose: ${obj.functions['constructor'].purpose}`)
            Lines.push(` * ${tabs()}Parameters: ${paramsList(obj.functions['constructor'])}`)
        }
        Lines.push(` * ${tabs()}Functions: `)
        tabLevel += 1
        for(var funcName in obj.functions) {
            if(funcName != 'constructor')
                Lines.push(` * ${tabs()}${funcName}: ${obj.functions[funcName].purpose}`)
        }
        Lines.push(' */')
        tabLevel = 0    
        Lines.push(`class ${key} {`)
        tabLevel += 1
        for(var funcName in obj.functions) {
            if(obj.functions[funcName].visibility != 'private') {
                if(funcName == 'constructor') {
                    Lines.push(`${tabs()}${funcName}(${paramsList(obj.functions['constructor'])}) {`)
                    tabLevel += 1
                    for(var k in obj.functions) {
                        if(obj.functions[k].static == 'both' || obj.functions[k].static == true) {
                            Lines.push(`${tabs()}this.${k} = this.${k}.bind(this, this)`)
                        } else if(k != 'constructor') { 
                            Lines.push(`${tabs()}this.${k} = ${k}.bind(this)`)   
                        }
                    }
                    tabLevel -= 1
                    Lines.push(`${tabs()}}`)
                } else {
                    Lines.push(`${tabs()}/*`)
                    Lines.push(`${tabs()} * \tPurpose: ${obj.functions[funcName].purpose}`)
                    if(obj.functions[funcName].params.length > 0)
                        Lines.push(`${tabs()} * \tParameters:`)
                    for(var par in obj.functions[funcName].params) {
                        Lines.push(`${tabs()} * \t    @param ${par}: ${param(obj.functions[funcName].params[par])}`)
                    }
                    Lines.push(`${tabs()} */`)
                    Lines.push(`${tabs()}${static(obj.functions[funcName])}${funcName}(${paramsList(obj.functions[funcName])}) {\n${tabs()}\tthrow 'Not implemented'\n${tabs()}}`)
                }
            }
            
        }
        Lines.push('}')
        Lines.push('\n')
        tabLevel = 0
        for(var funcName in obj.functions) {
            if(obj.functions[funcName].visibility == 'private') {
                Lines.push(`${tabs()}function ${funcName}(${paramsList(obj.functions[funcName])}) {\n${tabs()}\tthrow 'Not implemented'\n}`)
            }
        }
        Lines.push('\n')
        Lines.push(`module.exports = ${key}`)
    } else if(obj.type == 'functional') {
        Lines.push('/*')
        Lines.push(` * ${tabs()}Exported Functions: `)
        tabLevel += 1
        for(var funcName in obj.functions) {
            if(obj.functions[funcName].visibility != 'private')
                Lines.push(` * ${tabs()}${funcName}: ${obj.functions[funcName].purpose}`)
        }
        tabLevel -=1
        Lines.push(` * ${tabs()}Private Functions: `)        
        tabLevel += 1
        for(var funcName in obj.functions) {
            if(obj.functions[funcName].visibility == 'private')
                Lines.push(` * ${tabs()}${funcName}: ${obj.functions[funcName].purpose}`)                
        }
        Lines.push(' */')
        tabLevel = 0

        for(var funcName in obj.functions) {
            Lines.push('/*')
            Lines.push(` * ${tabs()}Purpose: ${obj.functions[funcName].purpose}`)
            if(obj.functions[funcName].params.length > 0)
                Lines.push(' * Functions: ')
            tabLevel += 1
            for(var par in obj.functions[funcName].params) {
                Lines.push(` * @param ${par}: ${param(obj.functions[funcName].params[par])}`)
            }
            tabLevel -= 1
            Lines.push(' */')            
            Lines.push(`${tabs()}function ${funcName}(${paramsList(obj.functions[funcName])}) {\n${tabs()}\tthrow 'Not implemented'\n${tabs()}}`)
        }
        Lines.push('\n')
        for(var funcName in obj.functions) {
            if(obj.functions[funcName].visibility != 'private')
                Lines.push(`module.exports.${funcName} = ${funcName}`)
        }
    } else if(obj.type == 'router') {
        var RenderRoute = function(method, route, comment) {
            Lines.push(`/*\n * ${route}`)
            Lines.push(` * Method: ${method}`)
            Lines.push(` * Remarks: ${comment}`)
            Lines.push(` */`)
            Lines.push(`route.${method}('${route}', function(response, request) {\n\tthrow "Route yet to be defined"\n})`)
        }
        for(var k in obj.post) {
            RenderRoute('post', k, obj.post[k])
            Lines.push("\n")
        }
        for(var k in obj.get) {
            RenderRoute('get', k, obj.get[k])
            Lines.push("\n")
            
        }
        for(var k in obj.all) {
            RenderRoute('all', k, obj.all[k])
            Lines.push("\n")            
        }
        Lines.push("module.exports = route")
    }
    
    return LinesToString(Lines)
}

function generateTestFile(obj, key) {
    var Lines = []
    var tabLevel = 0
    var tabs = function() {
        return tabber(tabLevel)
    }
    Lines.push(`var ${key} = require("../${obj.folder + '/' || ''}${obj.filename}")`)
    Lines.push(`describe('#${key}', function() {`)
    tabLevel += 1
    for(var funcName in obj.functions) {
        if(funcName != 'constructor') {
            Lines.push(`${tabs()}describe('${funcName}', function() {`)
            tabLevel += 1
            for(var test in obj.functions[funcName].tests) {
                Lines.push(`${tabs()}it('${obj.functions[funcName].tests[test]}')`)
            }
            tabLevel -= 1
            Lines.push(`${tabs()}})`)
        }
    }
    tabLevel -= 1
    Lines.push('})')
    return LinesToString(Lines)

}

makeFolders()
    .then(getData)
    .then(startGenerator)
    .catch(err => { throw err })