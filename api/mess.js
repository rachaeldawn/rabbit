var pg = require('pg')
var Promise = require('bluebird')
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

async function QueryTest() {
    try {
        var Client = await DataPool.connect()
        var result = Client.query(`SELECT * FROM asset ORDER BY ID ASC`)
        Client.release()
        return result
    } catch (err) {
        throw err
    }
}

async function FuckingDoSomething() {
    var res = await QueryTest()
    console.log(res)
}

FuckingDoSomething()