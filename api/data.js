var pg = require('pg')
var fs = require('fs')
var Promise = require('promise')

class Blank {constructor(){}}

var Pool = new pg.Pool({
    database: "rabbit",
    host: "192.168.1.189",
    max: 50,
    password: "Fluffeh9985",
    user: "Developer",
    port: 5432,
    idleTimeoutMillis: 30000
})

var dataDirectory = __dirname + '/data'
var models = {}

var files = fs.readdirSync(dataDirectory)
for(var k in files) {
    var Name = files[k].substr(0, files[k].length - 3).split('_').reduce(
        (prev, cur) => {
            cur = cur[0].toUpperCase() + cur.substr(1)
            prev += cur
            if(cur.toLowerCase() == 'tag') {
                prev = undefined
            } else {
                return prev
            }
        }, ''
    )
    models[Name] = require(__dirname + '/data/' + files[k].substr(0, files[k].length - 3))
    RegisterModel(models[Name])
}

function RegisterModel(model) {
    if(typeof model == typeof Blank) {
        for(var k in DataFunctions) {
            model.prototype[k] = DataFunctions[k].bind(DataFunctions[k], model.name)
        }
        model.prototype.isDataModel = true
        model.tableName = model.tableName || model.name.toLowerCase()
        Pool.query(`SELECT * FROM pg_tables WHERE tablename='${model.tableName}'`)
            .then(function(result) {
                if(result.rows[0] != undefined) {
                    model.prototype.Tag = Tag.bind(model)
                    model.prototype.UnTag = UnTag.bind(model)
                }
            })

    }
}

var DataFunctions = {
    Convert: function(obj, row) {
        
    },
    Serialize: function() {
        
    },
    Search: function() {
        
    },
    Update: function() {
        
    },
    Delete: function() {
        
    },
    Page: function() {
        
    },
    List: function() {
        
    },
    Save: function() {
        
    }
}

var Tag = function() {

}

var UnTag = function() {
    
}

module.exports = models
module.exports.RegisterModel = RegisterModel
module.exports.Pool = Pool