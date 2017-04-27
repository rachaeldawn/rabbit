var pg = require('pg')
var fs = require('fs')

class Blank {constructor(){}}

var Pool = new pg.Pool({
    database: "Rabbit",
    host: "localhost",
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
            return prev
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
        if(model.supportsTagging || model.prototype.supportsTagging) {
            model.prototype.Tag = Tag.bind(Tag, model.name)
            model.prototype.Untag = Untag.bind(Untag, model.name)
        }
    }
}

function Tag() {

}
function Untag() {

}

var DataFunctions = {
    Convert: function() {
        
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

for(var k in models) {
    RegisterModel(models[k])
}

module.exports = models
module.exports.RegisterModel = RegisterModel