"use strict";
exports.__esModule = true;
function Save() {
    return new Promise(function (resolve, reject) {
        console.log("Saving");
        resolve(true);
    });
}
function Thing() {
    return new Promise(function (resolve, reject) {
        resolve('Thing done');
    });
}
function Thing2() {
    return new Promise(function (resolve, reject) {
        resolve('Do other thing');
    });
}
Save()
    .then(function () { return Thing(); })
    .then(function (res) { return new Promise(function (resolve, reject) {
    console.log(res);
    resolve(res);
}); })
    .then(function () { return Thing2(); })
    .then(function (res) { return console.log(res); });
