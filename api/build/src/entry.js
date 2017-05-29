var _ = require('lodash');
var Promise = require('bluebird');
var chain = _.chain;
var add = function (x, y) { return new Promise(function (res, rej) {
    res(x + y);
}); };
var log = function (x) { return new Promise(function (res, rej) {
    console.log(x);
    res(x);
}); };
var logAdd = function (x, y) { return add(x, y).then(log).then(function (x) { return add(x, 2); }).then(log); };
logAdd(1, 2);
