var fs = require('fs')
var Promise = require('bluebird')

var ReadDir = function() {
    var files = fs.readdirSync(__dirname + '/data')
    return files.reduce(function(prev, cur) {
        if(prev == undefined) prev = []
        cur = __dirname + '/data/' + cur
        prev.push(cur)
        return prev
    }, [])
}

var RequireAll = function(reqs) {
    var requires = []
    for(var k in reqs) {
        requires.push(require(reqs[k]))
    }
    return requires
} 
var Load = function() {
    return RequireAll(ReadDir())
}

module.exports = Load