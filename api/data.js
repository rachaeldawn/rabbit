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

DataPool.query(`SELECT * FROM information_schema.columns WHERE table_schema='RabbitSchema'`)
    .then((res) => {
        for(var k in res.rows) {
            if(Models[res.rows[k].table_name] == undefined) {
                Models[res.rows[k].table_name] = {}
                
            }
            Models[res.rows[k].table_name][res.rows[k].column_name] = res.rows[k]
        }
    }).then(() => {
        var asset = require('./data/asset')
        var check = new asset(-1, 'a name', 'Description', undefined, undefined)
        Save(check)
            .catch(err => console.error(err))
    })

let Delete
let List
let Page
let Save = function(obj) {
    return new Promise(function(resolve, reject) {    
        if(obj.tablename == undefined)
            throw new Error('Undefined tablename')
        if(Models[obj.tablename] == undefined) 
            throw new Error(`Tablename not found: ${obj.tablename}`)
        try {
            ValidateObject(obj)
        } catch (err) {
            reject(err)
        }
        console.log("Send to DB")
    })
    
}
let Sync
let Tag
let Update



function ValidateObject(obj) {
    var tname = _.clone(obj.tablename)
    for(var k in Models[obj.tablename]) {
        if(obj[k] === undefined && Models[tname][k].is_nullable == 'NO') {
            throw new Error(`Required field ${k} is undefined`)
        }
    }
    return true
}