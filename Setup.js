var pg = require("pg")
var config = require("./config").dbConfig

var pool = new pg.Pool(config);

pool.connect((err, client, done) => {
    if(err){
        console.error("Error: " + err)
        return
    }
    client.query("CREATE TABLE UserAccount ( id integer PRIMARY KEY UNIQUE, username varchar(140));", undefined, (err, result) => {
        if(err) {
            console.log(err)
        }
    })
    client.query("CREATE TABLE AccountPassword( id integer PRIMARY KEY references UserAccount(id), hash varchar, salt varchar, iterations integer);", undefined, (err, result) => {
        if(err) {
            console.log(err)
        }
    })
})