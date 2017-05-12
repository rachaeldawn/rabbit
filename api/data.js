const _ = require('lodash')
const Promise = require('bluebird')
const Validator = require('validator')
var Models = {}
var fs = require('fs')
let pg = require('pg')


let DataPool = new pg.Pool({
    database: "rabbit_tests",
    host: "192.168.1.189",
    port: 5432,
    max: 50,
    idleTimeoutMillis: 30000,
    ssl: true,
    user: "Developer",
    password: "Fluffeh9985"
})

var Initialize = async function() {
    try {
        var res = await Query(`SELECT * FROM information_schema.columns WHERE table_schema='rabbitschema'`)
    } catch(err) {
        throw err
    }
    for(var k in res.rows) {
        if(Models[res.rows[k].table_name] == undefined)
            Models[res.rows[k].table_name] = {}
        Models[res.rows[k].table_name][res.rows[k].column_name] = res.rows[k]
    }
}

let Delete = async function(obj) {
    ValidateObject(obj, Models[obj.tablename])
    obj.id == -1 && UnsavedObjectError()
    try {
        var res = (await Query(`DELETE FROM ${obj.tablename} WHERE id=${obj.id} RETURNING *`)).rows
    } catch(err) {
        throw err
    }
    obj.id = -1
    return res
}

let Page = async function(obj, amt, page, asc = true) {
    !obj.prototype.tablename && RequiredFieldError('tablename')
    !amt && RequiredFieldError('amt')
    (page == undefined || page == null) && RequiredFieldError('page')

    var tname = obj.tablename || obj.prototype.tablename

    !_.isNumber(amt) && WrongTypeError(typeof amt, 'number', 'amt')
    !_.isNumber(page) && WrongTypeError(typeof page, 'number', 'page')
    if(page < 0)  {
        asc = !asc
        page = Math.abs(page)
    }
    amt < 1 && WrongTypeError('signed integer', 'unsigned integer', 'amt')
    amt = amt > 100 ? amt = 100 : amt
    SanitizeObject(obj)
    return (await Query(`SELECT * FROM ${tname} ORDER BY id ${asc ? 'ASC' : 'DESC'} LIMIT ${amt} ${amt * page != 0 ? 'OFFSET ' + amt * page : ''}`)).rows
    
}

let List = (obj, amt, asc = true) => Page(obj, amt, 0, asc)

let Save = async function(obj) {
    try {
        ObjectToQueryable(obj)
    } catch(err) {
        throw err
    }
    SanitizeObject(obj)
    var Values = GenerateDefinedValuesArray(obj)
    var res = (await Query(`INSERT INTO ${obj.tablename} (${GenerateDefinedKeysString(obj)}) VALUES (${GenerateDefinedValuesPlaceholders(Values.length)}) RETURNING *`, Values)).rows[0]
    SoftClone(obj, res)
    return obj
}
// AKA Spawn, Get, etc
// Select * FROM tablename WHERE id=x
let Sync = async function(obj) {
    ValidateObject(obj, Models[obj.tablename])
    SanitizeObject(obj)
    try {
        var DBResult = (await Query(`SELECT * FROM ${obj.tablename} WHERE id=${obj.id}`)).rows[0]
        SoftClone(obj, DBResult)
    } catch(err) {
        throw err
    }
    return obj
}

/**
 * 
 * @param { Data object with partially filled, or filled, values. Strings will always use %val% for sake of ease.} obj 
 */
let Search = function(obj) {

}

// UPDATE tablename SET param=value, param=value WHERE id=x RETURNING *
let Update = async function(obj) {
    try {
        ObjectToQueryable(obj)
    } catch(err) {
        throw err
    }
    (!obj.id || obj.id == -1 || obj.id == undefined) && RequiredFieldError('id')
    var Existent = (await Query(`SELECT * FROM ${obj.tablename} WHERE id=${obj.id}`)).rows[0]
    updateObj = {}
    for(var k in Existent) {
        if(obj[k] != Existent[k] && obj[k] != `'${Existent[k]}'`) 
            updateObj[k] = obj[k]
    }
    updateObj.id = obj.id
    updateObj.tablename = obj.tablename
    var returnResult = await Query(`UPDATE ${updateObj.tablename} SET ${GenerateUpdateKVs(updateObj)} WHERE id=${updateObj.id} RETURNING *`)
    return returnResult.rows[0]
    
}

var GenerateDefinedKeysString = function(obj) {
    return _.keys(obj).reduce((prev, cur) => {
        if(IsAValidObjectKey(obj, cur)) 
            prev = (prev == '' ? cur : prev + ', ' + cur)
        return prev
    },'')
}

var GenerateDefinedValuesArray = function(obj) {
    return _.keys(obj).reduce((prev, cur) => {
        IsAValidObjectKey(obj, cur) && prev.push(obj[cur])
        return prev
    }, [])
}

var GenerateUpdateKVs = function(obj) {
    return _.keys(obj).reduce((prev, cur) => {
        if(_.isString(obj[cur])) obj[cur] = '\'' + obj[cur] + '\''
        if(IsAValidObjectKey(obj, cur)) 
            prev = prev == '' ? `${cur} = ${obj[cur]}` : prev + `, ${cur} = ${obj[cur]}`
        return prev
    }, '')
}

var IsAValidObjectKey = (obj, key) => (obj[key] && key != 'tablename' && key != 'id' && !_.isFunction(obj[key])) 

var GenerateDefinedValuesPlaceholders = function(num) {
    num < 1 && IntOutOfBoundsError(num, 1, 1000, 'num')
    var str = '$1'
    for(i = 2; i <= num; i++) 
        str += ", $" + i
    return str
}

/**
 * @param {data/model} obj : The object to operate on
 */
function ObjectToQueryable(obj) {
    var tname = _.clone(obj.tablename)
    !tname && RequiredFieldError('tablename')
    !Models[tname] && UnregisteredModelError(obj)
    ValidateObject(obj, Models[tname])
    for(var k in Models[obj.tablename]) {
        !obj[k] && Models[tname][k].is_nullable == 'NO' && RequiredFieldError(k)
        if(!obj[k] || k == 'id') {
            continue
        }
        switch(Models[tname][k].udt_name) {
            case('int2'):
            case('int4'):
            case('int8'):
                obj[k] = ValidateInteger(obj[k], k, Models[tname][k].udt_name)[3]
                break;
            case('numeric'):
                obj[k] = ValidateNumeric(obj[k], k, Models[tname][k].numeric_precision)
                break;
            case('varchar'):
                obj[k] = ValidateVarchar(obj[k], k, Models[tname][k].character_maximum_length)
                break;
            case('date'): 
            case('timestamp'):
            case('timestamptz'):
                obj[k] = ValidateDate(obj[k], k)
                break;
            case('money'): 
                obj[k] = ValidateMoney(obj[k], k)
                break;
            case('bool'):
                obj[k] = ValidateBoolean(obj[k], k)
                break
            case('text'):
                obj[k] = ValidateVarchar(obj[k], k)
            default:
                console.log(`Add support for validation to ${Models[tname][k].udt_name}`)
                break;
        }
    }
    // Test key count, and check 
    return obj
}

// Just a soft-clone. I don't want to lose the object reference.
var SoftClone = function(obj, row) {
    for(var k in row)
        obj[k] = row[k]
}

/**
 * @param {string} size 
 * @param {value} obj 
 */
function IntIsInRange(size, obj) {
    // Stated for sake of performance. Math.pow 6 times on every column needed is just a bit ridiculous.
    // I know that a 2 byte integer is -65536 to 65535, but I use smallint only once and I use it for byte types.
    size = "" + size
    var sizes = {
        '2': [0, 255],
        '4': [-2147483648, 2147483647],
        '8': [-9223372036854775808, 9223372036854775807]
    }
    return (obj >= sizes[size][0] && sizes[size][1] >= obj)
}

function CountsAsNumber(obj) {
    // Dates 'count' as numbers, but they are not valid. 
    return !_.isDate(obj) && _.isNumber(parseFloat(obj)) && `${obj}`.split('.').length <= 2
}

var Query = async function(str, args) {
    try {
        var Client = await DataPool.connect()
        var res = await Client.query(str, args)
        Client.release()
    } catch(err) {
        throw err
    }
    return res
}

let ValidBooleans = {
    '0': false,
    'f': false,
    'false': false,
    'n': false,
    'no': false,
    'off': false,
    '1': true,
    't': true,
    'true': true,
    'y': true,
    'yes': true,
    'on': true
}

// All Validate functions require that the params are not null. 
// First 2 lines on all of them is param checking.

var ValidateInteger = function(obj, name, type) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')
    !type && RequiredFieldError('type')

    !CountsAsNumber && WrongTypeError(typeof obj, 'string(number)|number')

    // Is it a number in string form? If so, make it a number
    obj = _.parseInt(obj)

    // Is it within its limits?
    type == '2' && !IntIsInRange(2, obj) && IntOutOfBoundsError(obj, 0, 255, name)
    type == '4' && !IntIsInRange(4, obj) && IntOutOfBoundsError(obj, -2147483648, 2147483647, name)
    type == '8' && !IntIsInRange(8, obj) && IntOutOfBoundsError(obj, -9223372036854775808, 9223372036854775807, name)

    return obj
}



var ValidateNumeric = function(obj, name, precision) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')
        
    // Is the string a "number"
    !CountsAsNumber(obj) && WrongTypeError(typeof obj, 'string(number)|number', name)
    
    // Is it too long?
    (('' + obj).split('.').pop() > precision) && WrongTypeError(typeof obj, `float(${precision})`, name)
    
    // Safety parse
    return parseFloat(obj)
}

var ValidateVarchar = function(obj, name, max) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')

    // Is it a string?
    !_.isString(obj) && WrongTypeError(typeof obj, 'string', name)
    
    if(!max) return obj
    // Is the string too long?
    obj.length > max && StringTooLongError(name, max)
    return obj
}

var ValidateDate = function(obj, name) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')

    // Is it a date in string value, or a date?
    (!_.isString(obj) && !_.isDate(obj)) && WrongTypeError(typeof obj, 'string(date)|Date', name)
    // Is it a string? Make it a date
    if(_.isString(obj)) { obj = new Date(obj) }
    // Did the string make a proper date?
    obj == 'Invalid date' && WrongTypeError(typeof obj, 'string(date)|Date', name)
    // Make it a UTC string
    return obj.toUTCString()
}

var ValidateMoney = function(obj, name) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')
    
    
    // Does it 'count' as a number
    !CountsAsNumber(obj) && WrongTypeError(typeof obj, 'string(number)|number', name)

    // Does the string have more than 1 period?
    _.isString(obj) && `${obj}`.split('.').length > 2 && WrongTypeError('multi-decimal string', 'string(number)|numer', name)
    
    // Safety parse
    obj = parseFloat(obj)

    // Is it a number?
    !_.isNumber(obj) && WrongTypeError(typeof obj, 'string(number)|number', name)
    return obj
}

var ValidateBoolean = function(obj, name) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')
    
    // Postgres' valid values for true/false
    
    // is the object a valid value?
    _.toLower(ValidBooleans[("" + obj)]) == undefined && WrongTypeError(typeof obj, 'string(bool)|boolean')
    
    // return true/false 
    return ValidBooleans[("" + obj).toLowerCase()]
}

var ValidateObject = function(obj, ref) {
    for(var k in obj) 
        !_.has(ref, k) && k != 'tablename' && !_.isFunction(obj[k]) && InvalidModelError()
}

var SanitizeObject = function(obj) {
    for(var k in obj) {
        if(_.isString(obj[k]) && k != 'tablename'){
            obj[k] = Validator.escape(obj[k])
        }
    }
}

var WrongTypeError = function(actual, expected, name = null) {
    throw new Error(`Invalid type ${actual}, expected ${expected} ${name != null ? 'for ' + name : ''}`)
}
var IntOutOfBoundsError = function(value, min, max, name = null) {
    throw new Error(`Value${value} ${name != null ? ' for ' + name : ''} is out of bounds. Min: ${min}, Max: ${max}`)
}
var RequiredFieldError = function(name) {
    throw new Error(`Required field ${name} is undefined`)
}
var StringTooLongError = function(name, max) {
    throw new Error(`String ${name} is too long. Max: ${max}`)
}
var UnregisteredModelError = function(obj) {
    throw new Error(`Class '${obj.constructor.name}' is not registered.`)
}
var InvalidModelError = function() {
    throw new Error(`Object does not align with schema.`)
}
var UnsavedObjectError = function() {
    throw new Error('Object was never saved.')
}

module.exports.Initialize           = Initialize
module.exports.ObjectToQueryable    = ObjectToQueryable
module.exports.ValidateBoolean      = ValidateBoolean
module.exports.ValidateDate         = ValidateDate
module.exports.ValidateInteger      = ValidateInteger
module.exports.ValidateMoney        = ValidateMoney
module.exports.ValidateNumeric      = ValidateNumeric
module.exports.ValidateVarchar      = ValidateVarchar
module.exports.ValidateObject       = ValidateObject
module.exports.Models               = Models
module.exports.GenerateDefinedList  = GenerateDefinedKeysString
module.exports.Save                 = Save
module.exports.Page                 = Page
module.exports.List                 = List
module.exports.Delete               = Delete
module.exports.Update               = Update
module.exports.Search               = Search