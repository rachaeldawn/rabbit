var pg = require('pg')

var Pool = new pg.Pool({
    database: "Rabbit",
    host: "localhost",
    max: 50,
    password: "Fluffeh9985",
    user: "Developer",
    port: 5432,
    idleTimeoutMillis: 30000
})

class Blank {constructor(){}}

var models = {
    Asset:          require('./data/asset'),
    Bulletin:       require('./data/bulletin'),
    Calendar:       require('./data/calendar'),
    Communication:  require('./data/communication'),
    Customer:       require('./data/customer'),
    Employee:       require('./data/employee'),
    Expenses:       require('./data/expenses'),
    Payroll:        require('./data/payroll'),
    PurchaseOrder:  require('./data/purchaseorder'),
    Tag:            require('./data/tag'),
    Transaction:    require('./data/transaction'),
    User:           require('./data/user'),
    Workorder:      require('./data/workorder')
}

function RegisterModel(model) {
    if(typeof model == typeof Blank) {
        for(var k in DataFunctions) {
            model.prototype[k] = DataFunctions[k].bind(DataFunctions[k], model.name)
        }
        model.IsDataModel = true
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