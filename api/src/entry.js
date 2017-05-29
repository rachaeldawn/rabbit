let _ = require('lodash')
let Promise = require('bluebird')
let chain = _.chain
let add = (x, y) => new Promise((res, rej) => {
    res(x + y)
})
let log = (x) => new Promise((res, rej) => {
    console.log(x)
    res(x)
})

let logAdd = (x, y) => add(x, y).then(log).then(x => add(x, 2)).then(log)

logAdd(1, 2)