var BuildColumns = function(obj) {
    return Object.keys(obj)
    .reduce(function(prev, cur) {
        if(cur != 'id')
        if(isValidProperty(obj, cur)) {
            if(prev == '') {
                prev = cur
            } else {
                prev += ', ' + cur
            }
        }
        return prev
    }, '')
}

var BuildValues = function(obj) {
    return Object.keys(obj).reduce(function(prev, cur){
        if(cur != 'id')
        if(isValidProperty(obj, cur)) {
            if(prev == '') {
                if(typeof obj[cur] == typeof '') {
                    prev = `'${obj[cur]}'`
                } else {
                    prev = `${obj[cur]}`
                }
            } else {
                if(typeof obj[cur] == typeof '') {
                    prev += `, '${obj[cur]}'`
                } else {
                    prev += `, ${obj[cur]}`
                }
            }
        }
        return prev
    }, ``)
}

var BuildDefinedProperties = function(obj) {
    return Object.getOwnPropertyNames(obj).reduce(function(prev, cur){
        if(prev == undefined) {
            prev = {}
        }
        if(isValidProperty(obj, cur)) {
            prev[cur] = obj[cur]
        }
        return prev
    }, {})
}

var BuildUpdateList = function(obj) {
    return Object.getOwnPropertyNames(obj).reduce(function(prev, cur) {
        if(prev == undefined) {
            prev == ''
        }
        if(isValidProperty(obj, cur)) {
            if(prev == '') {
                if(typeof obj[cur] == typeof '')
                    prev = `${cur} = '${obj[cur]}'` 
                else
                    prev = `${cur} = ${obj[cur]}`
            } else {
                if(typeof obj[cur] == typeof '')
                    prev += `, ${cur} = '${obj[cur]}'`
                else
                    prev += `, ${cur} = ${obj[cur]}`
            }
        }
        return prev
    }, '')
}

var isValidProperty = function(obj, cur = undefined) {
    if(cur != undefined)
        return (obj[cur] != undefined) && (typeof obj[cur] != typeof (function(){})) && (cur != 'tablename')
    else
        return obj != undefined && typeof obj != typeof (function(){}) && obj != 'tablename'
}

var Save = function(obj) {
    var ToSave = BuildDefinedProperties(obj)
    console.log(`INSERT INTO "RabbitSchema".${obj.tablename} (${BuildColumns(obj)}) VALUES (${BuildValues(obj)});`)
}

var Update = function(obj) {
    if(obj.id == undefined || obj.id == -1) {
        return console.error("Id needs to be set before I can update it")
    }
    var ToUpdate = BuildDefinedProperties(obj)
    console.log(`UPDATE ${obj.tablename} SET ${BuildUpdateList(ToUpdate)} WHERE id=${obj.id}`)
}

module.exports.Save = Save
module.exports.Update = Update