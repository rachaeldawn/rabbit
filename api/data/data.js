const Promise = require('promise')
const pg = require('pg')

var config = {
    database: "Rabbit",
    host: "localhost",
    max: 50,
    password: "Fluffeh9985",
    port: 5432,
    user: 'Developer'
}

let Pool = new pg.Pool(config)

function Query(query, callback) {
    if (query == undefined || query == null || query.length <= 0 || callback == undefined || callback == null) throw "Query or callback undefined or invalid."
    Pool.connect()
        .then((client) => {
            client.query(query)
                    .then(callback)
                    .catch(err => console.error(err))
        })
        .catch(err => console.error(err))
}


module.exports.Query = Query