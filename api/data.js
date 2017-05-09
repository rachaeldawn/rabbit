const _ = require('lodash')
const Promise = require('bluebird')
const pg = require('pg')
let Models = {}
var fs = require('fs')

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

var Initialize = function() {
    return new Promise(function(resolve, reject) {
        DataPool.query(`SELECT * FROM information_schema.columns WHERE table_schema='RabbitSchema'`)
        .then((res) => {
            for(var k in res.rows) {
                if(Models[res.rows[k].table_name] == undefined)
                    Models[res.rows[k].table_name] = {}
                Models[res.rows[k].table_name][res.rows[k].column_name] = res.rows[k]

            }
        })
        .then(DataPool.end(err => err && console.error(err)))
        .then(resolve())
        .catch(err => reject(err))
    })
}


// When running a query, generate a string like this:
// client.query("INSERT INTO user(name) VALUES($1)
// Using the 'defined properties' thing
// obj: { Fields: [], Values: [] }
//
// Call client.done when you're done with a client

let Delete
// page.bind(this, 1)
let List
// SELECT select_list FROM table_expression LIMIT amt OFFSET amt*page
let Page
let Save = function(obj) {
    return new Promise(function(resolve, reject) {    
        !obj.tablename && RequiredFieldError('obj.tablename')
        !Models[obj.tablename] && RequiredFieldError('Models[tablename]')
        try {
            ObjectToQueryable(obj)
        } catch (err) {
            reject(err)
        }
        console.log("Send to DB")
        // Resolve after here
        /*
        *   -- This inserts, then asks for what it gave
            INSERT INTO asset (name, description, purchase_value) VALUES ('returning_asset', 'Used for testing the returning statement', 34.33) RETURNING *
        */
    })
    
}
// AKA Spawn, Get, etc
// Select * FROM tablename WHERE id=x
let Sync
// Add a tag
let Tag
// UPDATE tablename SET param=value, param=value WHERE id=x RETURNING *
let Update



// Validators

function ObjectToQueryable(obj) {
    var tname = _.clone(obj.tablename)
    for(var k in Models[obj.tablename]) {
        obj[k] === undefined && Models[tname][k].is_nullable == 'NO' && RequiredFieldError(k)
        switch(Models[tname][k].udt_name) {
            case('int2'):
            case('int4'):
            case('int8'):
                obj[k] = ValidateInteger(obj[k], k, _.clone(Models[tname][k].udt_name)[3])
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
            default:
                console.log(`Add support for validation to ${Models[tname][k].udt_name}`)
                break;
        }
    }
}

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

    !CountsAsNumber && TypeError(typeof obj, 'string(number)|number')

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
    !CountsAsNumber(obj) && TypeError(typeof obj, 'string(number)|number', name)
    
    // Is it too long?
    (('' + obj).split('.').pop() > precision) && TypeError(typeof obj, `float(${precision})`, name)
    
    // Safety parse
    return parseFloat(obj)
}

var ValidateVarchar = function(obj, name, max) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')

    // Is it a string?
    !_.isString(obj) && TypeError(typeof obj, 'string', name)
    
    // Is the string too long?
    obj.length > max && StringTooLongError(name, max)
    return obj
}

var ValidateDate = function(obj, name) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')

    // Is it a date in string value, or a date?
    (!_.isString(obj) && !_.isDate(obj)) && TypeError(typeof obj, 'string(date)|Date', name)
    // Is it a string? Make it a date
    if(_.isString(obj)) { obj = new Date(obj) }
    // Did the string make a proper date?
    obj == 'Invalid date' && TypeError(typeof obj, 'string(date)|Date', name)
    // Make it a UTC string
    return obj.toUTCString()
}

var ValidateMoney = function(obj, name) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')
    
    
    // Does it 'count' as a number
    !CountsAsNumber(obj) && TypeError(typeof obj, 'string(number)|number', name)

    // Does the string have more than 1 period?
    _.isString(obj) && `${obj}`.split('.').length > 2 && TypeError('multi-decimal string', 'string(number)|numer', name)
    
    // Safety parse
    obj = parseFloat(obj)

    // Is it a number?
    !_.isNumber(obj) && TypeError(typeof obj, 'string(number)|number', name)
    return obj
}

var ValidateBoolean = function(obj, name) {
    !obj && RequiredFieldError('obj')
    !name && RequiredFieldError('name')
    
    // Postgres' valid values for true/false
    
    // is the object a valid value?
    _.toLower(ValidBooleans[("" + obj)]) == undefined && TypeError(typeof obj, 'string(bool)|boolean')
    
    // return true/false 
    return ValidBooleans[("" + obj).toLowerCase()]
}

var TypeError = function(actual, expected, name = null) {
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

module.exports.Initialize           = Initialize
module.exports.ObjectToQueryable    = ObjectToQueryable
module.exports.ValidateBoolean      = ValidateBoolean
module.exports.ValidateDate         = ValidateDate
module.exports.ValidateInteger      = ValidateInteger
module.exports.ValidateMoney        = ValidateMoney
module.exports.ValidateNumeric      = ValidateNumeric
module.exports.ValidateVarchar      = ValidateVarchar