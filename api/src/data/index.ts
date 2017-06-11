// TODO: Dependency inject this later from a config file to support _tests vs _production DBs

import { clone, keys, isString, isNumber, isDate, isFunction, has, toLower } from "lodash"
import * as Validator from "Validator"
import * as pg from "pg"
import * as Errors from "../errors"

export var Models = {}

let DataPool

export var Initialize = async function(config = undefined) {
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

export let Delete: (obj) => object = async function(obj) {
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

export let Page = async function(obj, amt, page, asc = true) {
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
export let List = (obj, amt, asc = true) => Page(obj, amt, 0, asc)

export let Save = async function(obj) {
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
export let Sync = async function(obj) {
    // Note that there's no need to validate/sanitize because Models[Key] will never contain HTMLChars.
    // Verify the 2 important fields are up to par
    !obj.id && Errors.RequiredFieldError('id')
    !isNumber(obj.id) && Errors.WrongTypeError(typeof obj.id, 'number', 'id')
    !Models[obj.tablename] && Errors.UnregisteredModelError(obj)

    // Pull the database's information on the object, and softclone it.
    try {   
        // obj.tablename does not need sanitization because if it was set by a nefarious source, the previous statement would have errored.
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
export let Search = async function(obj, amt = 25, page = 0, asc = true) {
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
    FormatToQueryable(obj)
    // Sanitize from any pesky fuckers.
    SanitizeObject(obj)
    return (await Query(`SELECT * FROM ${obj.tablename} WHERE ${GenerateSearchValues(obj)} ORDER BY id ${asc ? 'asc' : 'desc'} LIMIT ${amt} ${amt * page > 0 ? 'OFFSET ' + amt * page : ''}`)).rows
}

// UPDATE tablename SET param=value, param=value WHERE id=x RETURNING *
export let Update = async function(obj) {
    // Make sure the object has an id
    (!obj.id || obj.id == -1 || obj.id == undefined) && Errors.RequiredFieldError('id')
    // Prep object for query
    try {
        ObjectToQueryable(obj)
    } catch(err) {
        throw err
    }
    let updateObj: any = {}
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
export var GenerateDefinedKeysString = function(obj) {
    return keys(obj).reduce((prev, cur) => {
        if(ValidateObjectKey(obj, cur)) 
            prev = (prev == '' ? cur : prev + ', ' + cur)
        return prev
    },'')
}


// Generate an array with only valid values
export var GenerateDefinedValuesArray = (obj) => 
    keys(obj).reduce((prev, cur) => {
        ValidateObjectKey(obj, cur) && prev.push(obj[cur])
        return prev
    }, [])

// Generate a Key = newValue string for update
export var GenerateUpdateKVs = (obj) =>
    keys(obj).reduce((prev, cur) => {
        if(isString(obj[cur]) && obj[cur][0] != "'") obj[cur] = '\'' + obj[cur] + '\''
        if(ValidateObjectKey(obj, cur)) 
            prev = prev == '' ? `${cur} = ${obj[cur]}` : prev + `, ${cur} = ${obj[cur]}`
        return prev
    }, '')

// Generate a $1, $2, $3 style placeholder
export var GenerateDefinedValuesPlaceholders = function(num) {
    num < 1 && Errors.IntOutOfBoundsError(num, 1, 1000, 'num')
    var str = '$1'
    for(let i = 2; i <= num; i++) 
        str += ", $" + i
    return str
}

// Generate a search string
export var GenerateSearchValues = function(obj) {
    return keys(obj).reduce(function(prev, cur) {
        var param = `${cur} ${isString(obj[cur]) ? "like '%" + obj[cur] + "%' " : '= ' + obj[cur]}`
        if(cur != 'tablename' && obj[cur] && !isFunction(obj[cur]))
            prev = prev == '' ? param : prev + ' AND ' + param
        return prev
    }, '')
}

/**
 * @param {data/model} obj : The object to operate on
 */
export function ObjectToQueryable(obj) {
    var tname = clone(obj.tablename) || Errors.RequiredFieldError('tablename')
    !Models[tname] && Errors.UnregisteredModelError(obj)
    ValidateObject(obj, Models[tname])
    for(var k in obj) {
        !obj[k] && Models[tname][k].is_nullable == 'NO' && k != 'id' && Errors.RequiredFieldError(k)
    }
    FormatToQueryable(obj)
    // Test key count, and check 
    return obj
}

//let StripFunction = (obj, k) => { obj[k] = undefined }

export function FormatToQueryable(obj) {
    var tname = obj.tablename
    for(var k in Models[obj.tablename]) {
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
// DO NOT call this if there is already a defined function.
// Only controllers should be using custom query functions.
export var Query = async function(str: string, args: any = undefined) {
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
var SanitizeObject = function(obj: any) {
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

export var ValidateInteger = function(obj, name, type) {
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

export var ValidateNumeric = function(obj, name, precision) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')
        
    // Is the string a "number"
    !CountsAsNumber(obj) && Errors.WrongTypeError(typeof obj, 'string(number)|number', name)
    
    // Is it too long?
    (('' + obj).split('.').pop() > precision) && Errors.WrongTypeError(typeof obj, `float(${precision})`, name)
    
    // Safety parse
    return parseFloat(obj)
}

export var ValidateVarchar = function(obj, name, max = undefined) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')

    // Is it a string?
    !isString(obj) && Errors.WrongTypeError(typeof obj, 'string', name)
    
    if(!max) return obj
    // Is the string too long?
    obj.length > max && Errors.StringTooLongError(name, max)
    return obj
}

export var ValidateDate = function(obj, name) {
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

export var ValidateMoney = function(obj, name) {
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

export var ValidateBoolean = function(obj, name) {
    !obj && Errors.RequiredFieldError('obj')
    !name && Errors.RequiredFieldError('name')
    
    // Postgres' valid values for true/false
    
    // is the object a valid value?
    toLower(ValidBooleans[("" + obj)]) == undefined && Errors.WrongTypeError(typeof obj, 'string(bool)|boolean')
    
    // return true/false 
    return ValidBooleans[("" + obj).toLowerCase()]
}

export var ValidateObject = function(obj, ref) {
    for(var k in obj) 
        !has(ref, k) && k != 'tablename' && !isFunction(obj[k]) && Errors.InvalidModelError()
}

// It exists, is not tablename or id, and is not a function
export var ValidateObjectKey = (obj, key) => (obj[key] && key != 'tablename' && key != 'id' && !isFunction(obj[key])) 