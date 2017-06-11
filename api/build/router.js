(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "express"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var express_1 = require("express");
    var route = express_1.Router();
    route.post('/:Type/:Function', function (response, request) {
        throw "Route yet to be defined";
    });
    route.post('/:Type/List/:Amount', function (response, request) {
        throw "Route yet to be defined";
    });
    route.post('/:Type/Page/:Amount/:Page', function (response, request) {
        throw "Route yet to be defined";
    });
    route.post('/:Type/Tag/:Function', function (response, request) {
        throw "Route yet to be defined";
    });
    route.post('/:Type/Page/Tagged/:Amount/:Page', function (response, request) {
        throw "Route yet to be defined";
    });
    route.post('/:Type/Tag/Page/:Amount/:Page', function (response, request) {
        throw "Route yet to be defined";
    });
    route.post('/:Type/Tag/List/:Amount', function (response, request) {
        throw "Route yet to be defined";
    });
    route.post('/:Type/:Function/Tag', function (response, request) {
        throw "Route yet to be defined";
    });
    exports["default"] = route = route;
});
