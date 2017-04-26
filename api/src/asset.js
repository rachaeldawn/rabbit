// CRUD
var Data = require('./data')
var query = Data.Query

class Asset {
    constructor(name, description, purchase_value, serial = null) {
        this.name = name
        this.description = description
        this.purchase_value = purchase_value
        this.serial = serial
    }
    static convert(row) {
        return new Asset(row.name, row.description, row.purchase_value, row.serial)
    }
    static serialize(rows) {
        var assets = []
        for(var k in rows.rows) {
            assets.push(this.convert(rows.rows[k]))
        }
        return assets
    }
    static search(obj, callback) {
        // Id
        var convertResult = function(res) {
            console.log(typeof res)
            res = this.serialize(res.rows)
            callback(res)
        }
        if(typeof obj === typeof 1) {
            query(`SELECT * FROM asset WHERE id=${obj}`, convertResult)
        }
        // Name
        if(typeof obj === typeof "") {
            query(`SELECT * FROM asset WHERE name=${obj}`,  convertResult)
        }
    }
    static add(obj) {
        if(!(obj instanceof Asset)) return console.error('Needs to be an instance of Asset')
        query(`INSERT INTO asset (name, description, purchase_value, serial) VALUES (${obj.name}, ${3}, ${3}, ${3})`)
    }
}

module.exports = Asset

exports.exists = function(queryFunction) {

}/*
add
modify
search
remove


ADD 
`INSERT INTO asset (name, description, purchase_value) VALUES('${name}', '${description}', '${value}')`
*/