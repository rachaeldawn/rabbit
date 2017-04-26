var Asset = require('./src/asset')

Asset.search(1, res => console.log(res))


Array.prototype.first = function() {
    return this[0]
}
Array.prototype.last = function() {
    return this[this.length - 1]
}

var things = [0, 1, 2, 3, 4, 5, 6]

console.log(things.first())
console.log(things.last())
