// This file serves as the "start" of the application. All dependency injections, all configs, and everything should be in this file.
// This is the "setup"
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "stripe"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var StripeNode = require("stripe");
    var Transactor = StripeNode('apiKey');
});
