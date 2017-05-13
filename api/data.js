// TODO: Dependency inject this later from a config file to support _tests vs _production DBs

const lodash = require('lodash')
const keys = lodash.keys
const isString = lodash.isString
const isNumber = lodash.isNumber
const isDate = lodash.isDate
const clone = lodash.clone
const has = lodash.has
const isFunction = lodash.isFunction
const toLower = lodash.toLower
const forEach = lodash.forEach
const Promise = require('bluebird')
const Validator = require('validator')
var Models = {}
var fs = require('fs')
let pg = require('pg')
const Errors = require('./errors')

let DataPool

var Initialize = async function(config = undefined) {
    // Initialize with other config? If not, use the testing DB by default
    DataPool = new pg.Pool(config || {
        database: "rabbit_tests",
        host: "192.168.1.189",
        port: 5432,
        max: 50,
        idleTimeoutMillis: 30000,
        ssl: true,
        user: "Developer",
        password: "Fluffeh9985"
    })
    // Try get the database schema for local reference and validation
    try {
        var rows = (await Query(`SELECT * FROM information_schema.columns WHERE table_schema='rabbitschema'`)).rows
    } catch(err) {
        throw err
    }
    // Populate the local reference where the key is the tablename
    for(var k in rows) {
        if(Models[rows[k].table_name] == undefined)
            Models[rows[k].table_name] = {}
        Models[rows[k].table_name][rows[k].column_name] = rows[k]
    }
}

let Delete = async function(obj) {
    // Ignore unset objects
    obj.id == -1 && Errors.UnsavedObjectError()
    // Ensure object conforms to standards
    ValidateObject(obj, Models[obj.tablename])
    // Delete the object, and return the results
    try {
        var res = (await Query(`DELETE FROM ${obj.tablename} WHERE id=${obj.id} RETURNING *`)).rows
    } catch(err) {
        throw err
    }
    // Set the id to the 'non-existent' value
    obj.id = -1
    // Return the deletion results (for testing)
    return res
}

let Page = async function(obj, amt, page, asc = true) {
    // Are the parameters valid?
    !obj.prototype.tablename && !obj.tablename && Errors.RequiredFieldError('tablename')
    !amt && Errors.RequiredFieldError('amt')
    amt < 1 && Errors.WrongTypeError('signed integer', 'unsigned integer', 'amt')
    !isNumber(amt) && Errors.WrongTypeError(typeof amt, 'number', 'amt')
    (page == undefined || page == null) && Errors.RequiredFieldError('page')
    !isNumber(page) && Errors.WrongTypeError(typeof page, 'number', 'page')

    // You can pass either an instance or a require('name') and it'll work.
    var tname = obj.tablename || obj.prototype.tablename
    // Negative pages flip ascending/descending returns. -2 and asc = false returns page 2 in normal order, for example.
    if(page < 0)  {
        asc = !asc
        page = Math.abs(page)
    }
    // Cap the amount
    amt = amt > 100 ? amt = 100 : amt

    // Return the page results
    return (await Query(`SELECT * FROM ${tname} ORDER BY id ${asc ? 'ASC' : 'DESC'} LIMIT ${amt} ${amt * page != 0 ? 'OFFSET ' + amt * page : ''}`)).rows
    
}

// This is because I think typing 'page' when you just want a list is ridiculous
let List = (obj, amt, asc = true) => Page(obj, amt, 0, asc)

let Save = async function(obj) {
    // Format and validate
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
    // Note that there's no need to validate/sanitize because Models[Key] will never contain HTMLChars.
    // Verify the 2 important fields are up to par
    !obj.id && Errors.RequiredFieldError('id')
    !isNumber(obj.id) && Errors.WrongTypeError(typeof obj.id, 'number', 'id')
    !Models[obj.tablename] && Errors.UnregisteredModelError(obj)

    // Pull the database's information on the object, and softclone it.
    try {
        var DBResult = (await Query(`SELECT * FROM ${tname} WHERE id=${obj.id}`)).rows[0]
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
let Search = async function(obj, amt = 25, page = 0, asc = true) {
    // Ensure that the parameters passed are up to standard
    !obj.tablename && Errors.RequiredFieldError('tablename')
    !amt && Errors.RequiredFieldError('amt')
    !isNumber(amt) && Errors.WrongTypeError(typeof amt, 'number', 'amt')
    !isNumber(page) && Errors.WrongTypeError(typeof page, 'number', 'page')
    amt < 1 && Errors.WrongTypeError('signed integer', 'unsigned integer', 'amt')
    (page == undefined || page == null) && Errors.RequiredFieldError('page')
    // Paging supported
    if(page < 0)  {
        asc = !asc
        page = Math.abs(page)
    }
    amt = amt > 100 ? amt = 100 : amt
    // Sanitize from any pesky fuckers.
    SanitizeObject(obj)
    return (await Query(`SELECT * FROM ${obj.tablename} WHERE ${GenerateSearchValues(obj)} ORDER BY id ${asc ? 'asc' : 'desc'} LIMIT ${amt} ${amt * page > 0 ? 'OFFSET ' + amt * page : ''}`)).rows
}

// UPDATE tablename SET param=value, param=value WHERE id=x RETURNING *
let Update = async function(obj) {
    // Make sure the object has an id
    (!obj.id || obj.id == -1 || obj.id == undefined) && Errors.RequiredFieldError('id')
    // Prep object for query
    try {
        ObjectToQueryable(obj)
    } catch(err) {
        throw err
    }
    updateObj = {}
    updateObj.id = obj.id
    updateObj.tablename = obj.tablename
    // Get the row that matches the object
    var Existent = (await Query(`SELECT * FROM ${obj.tablename} WHERE id=${obj.id}`)).rows[0]
    // Push the diffs to updateObj
    for(var k in Existent) {
        if(obj[k] != Existent[k] && obj[k] != `'${Existent[k]}'`) 
            updateObj[k] = obj[k]
    }
    // No point in updating an object that is not any different
    if(keys(obj).length == 2)
        return
    return (await Query(`UPDATE ${updateObj.tablename} SET ${GenerateUpdateKVs(updateObj)} WHERE id=${updateObj.id} RETURNING *`)).rows[0]    
}

// Generate a string with only keys that have values
var GenerateDefinedKeysString = function(obj) {
    return keys(obj).reduce((prev, cur) => {
        if(ValidateObjectKey(obj, cur)) 
            prev = (prev == '' ? cur : prev + ', ' + cur)
        return prev
    },'')
}


// Generate an array with only valid values
var GenerateDefinedValuesArray = (obj) => 
    keys(obj).reduce((prev, cur) => {
        ValidateObjectKey(obj, cur) && prev.push(obj[cur])
        return prev
    }, [])

// Generate a Key = newValue string for update
var GenerateUpdateKVs = (obj) =>
    keys(obj).reduce((prev, cur) => {
        if(isString(obj[cur]) && obj[cur][0] != "'") obj[cur] = '\'' + obj[cur] + '\''
        if(ValidateObjectKey(obj, cur)) 
            prev = prev == '' ? `${cur} = ${obj[cur]}` : prev + `, ${cur} = ${obj[cur]}`
        return prev
    }, '')

// Generate a $1, $2, $3 style placeholder
var GenerateDefinedValuesPlaceholders = function(num) {
    num < 1 && Errors.IntOutOfBoundsError(num, 1, 1000, 'num')
    var str = '$1'
    for(i = 2; i <= num; i++) 
        str += ", $" + i
    return str
}

// Generate a search string
var GenerateSearchValues = function(obj) {
    return keys(obj).reduce(function(prev, cur) {
        var param = `${cur} ${isString(obj[cur]) ? "like '%" + obj[cur] + "%' " : '= ' + obj[cur]}`
        if(cur != 'tablename' && obj[cur])
            prev = prev == '' ? param : prev + 'AND ' + param
        return prev
    }, '')
}

/**
 * @param {data/model} obj : The object to operate on
 */
function ObjectToQueryable(obj) {
    var tname = clone(obj.tablename) || Errors.RequiredFieldError('tablename')
    !Models[tname] && Errors.UnregisteredModelError(obj)
    ValidateObject(obj, Models[tname])
    for(var k in Models[obj.tablename]) {
        // Check if the value is allowed to be null, vs whether or not it is
        !obj[k] && Models[tname][k].is_nullable == 'NO' && Errors.RequiredFieldError(k)
        // Ignore the id. It is not important for this.
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

/**
 * @section: Utilities
 */

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

// Dates 'count' as numbers, but they are not valid. 
function CountsAsNumber(obj) {
    return !isDate(obj) && isNumber(parseFloat(obj)) && `${obj}`.split('.').length <= 2
}

// Abstracted this out because #yolo
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

// Sanitize every string
var SanitizeObject = function(obj) {
    for(var k in obj) {
        if(isString(obj[k]) && k != 'tablename'){
            obj[k] = Validator.escape(obj[k])
        }
    }
}

// Valid 'boolean' values for validators
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
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')
    !type && Errors.RequiredFieldError('type')

    !CountsAsNumber && Errors.WrongTypeError(typeof obj, 'string(number)|number')

    // Is it a number in string form? If so, make it a number
    obj = parseInt(obj)

    // Is it within its limits?
    type == '2' && !IntIsInRange(2, obj) && Errors.IntOutOfBoundsError(obj, 0, 255, name)
    type == '4' && !IntIsInRange(4, obj) && Errors.IntOutOfBoundsError(obj, -2147483648, 2147483647, name)
    type == '8' && !IntIsInRange(8, obj) && Errors.IntOutOfBoundsError(obj, -9223372036854775808, 9223372036854775807, name)

    return obj
}

var ValidateNumeric = function(obj, name, precision) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')
        
    // Is the string a "number"
    !CountsAsNumber(obj) && Errors.WrongTypeError(typeof obj, 'string(number)|number', name)
    
    // Is it too long?
    (('' + obj).split('.').pop() > precision) && Errors.WrongTypeError(typeof obj, `float(${precision})`, name)
    
    // Safety parse
    return parseFloat(obj)
}

var ValidateVarchar = function(obj, name, max) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')

    // Is it a string?
    !isString(obj) && Errors.WrongTypeError(typeof obj, 'string', name)
    
    if(!max) return obj
    // Is the string too long?
    obj.length > max && Errors.StringTooLongError(name, max)
    return obj
}

var ValidateDate = function(obj, name) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')

    // Is it a date in string value, or a date?
    (!isString(obj) && !isDate(obj)) && Errors.WrongTypeError(typeof obj, 'string(date)|Date', name)
    // Is it a string? Make it a date
    if(isString(obj)) { obj = new Date(obj) }
    // Did the string make a proper date?
    obj == 'Invalid date' && Errors.WrongTypeError(typeof obj, 'string(date)|Date', name)
    // Make it a UTC string
    return obj.toUTCString()
}

var ValidateMoney = function(obj, name) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')
    
    // Does it 'count' as a number
    !CountsAsNumber(obj) && Errors.WrongTypeError(typeof obj, 'string(number)|number', name)

    // Does the string have more than 1 period?
    isString(obj) && `${obj}`.split('.').length > 2 && Errors.WrongTypeError('multi-decimal string', 'string(number)|numer', name)
    
    // Safety parse
    obj = parseFloat(obj)

    // Is it a number?
    !isNumber(obj) && Errors.WrongTypeError(typeof obj, 'string(number)|number', name)
    return obj
}

var ValidateBoolean = function(obj, name) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')
    
    // Postgres' valid values for true/false
    
    // is the object a valid value?
    toLower(ValidBooleans[("" + obj)]) == undefined && Errors.WrongTypeError(typeof obj, 'string(bool)|boolean')
    
    // return true/false 
    return ValidBooleans[("" + obj).toLowerCase()]
}

var ValidateObject = function(obj, ref) {
    for(var k in obj) 
        !has(ref, k) && k != 'tablename' && !isFunction(obj[k]) && Errors.InvalidModelError()
}

// It exists, is not tablename or id, and is not a function
var ValidateObjectKey = (obj, key) => (obj[key] && key != 'tablename' && key != 'id' && !isFunction(obj[key])) 


module.exports.Initialize                           = Initialize
module.exports.ObjectToQueryable                    = ObjectToQueryable
module.exports.ValidateBoolean                      = ValidateBoolean
module.exports.ValidateDate                         = ValidateDate
module.exports.ValidateInteger                      = ValidateInteger
module.exports.ValidateMoney                        = ValidateMoney
module.exports.ValidateNumeric                      = ValidateNumeric
module.exports.ValidateVarchar                      = ValidateVarchar
module.exports.ValidateObject                       = ValidateObject
module.exports.GenerateDefinedKeysString            = GenerateDefinedKeysString
module.exports.GenerateDefinedValuesArray           = GenerateDefinedValuesArray
module.exports.GenerateDefinedValuesPlaceholders    = GenerateDefinedValuesPlaceholders
module.exports.GenerateSearchValues                 = GenerateSearchValues
module.exports.GenerateUpdateKVs                    = GenerateUpdateKVs
module.exports.Models                               = Models
module.exports.GenerateDefinedKeysString            = GenerateDefinedKeysString
module.exports.Save                                 = Save
module.exports.Page                                 = Page
module.exports.List                                 = List
module.exports.Delete                               = Delete
module.exports.Update                               = Update
module.exports.Search                               = Search
