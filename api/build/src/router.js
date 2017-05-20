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
    /*
     * /:Type/:Function
     * Method: post
     * Remarks: Routing made easy. All params are received by JSON.
     */
    route.post('/:Type/:Function', function (response, request) {
        throw "Route yet to be defined";
    });
    /*
     * /:Type/List/:Amount
     * Method: post
     * Remarks: List amount
     */
    route.post('/:Type/List/:Amount', function (response, request) {
        throw "Route yet to be defined";
    });
    /*
     * /:Type/Page/:Amount/:Page
     * Method: post
     * Remarks: Pages number Page, amount Amount
     */
    route.post('/:Type/Page/:Amount/:Page', function (response, request) {
        throw "Route yet to be defined";
    });
    /*
     * /:Type/Tag/:Function
     * Method: post
     * Remarks: Perform function on Tag. Tag must be supported.
     */
    route.post('/:Type/Tag/:Function', function (response, request) {
        throw "Route yet to be defined";
    });
    /*
     * /:Type/Page/Tagged/:Amount/:Page
     * Method: post
     * Remarks: Pages tagged Type, Quantity Amount, page number Page
     */
    route.post('/:Type/Page/Tagged/:Amount/:Page', function (response, request) {
        throw "Route yet to be defined";
    });
    /*
     * /:Type/Tag/Page/:Amount/:Page
     * Method: post
     * Remarks: Perform function on Tagged Type. Tag must be supported.
     */
    route.post('/:Type/Tag/Page/:Amount/:Page', function (response, request) {
        throw "Route yet to be defined";
    });
    /*
     * /:Type/Tag/List/:Amount
     * Method: post
     * Remarks: Perform function on Tag. Tag must be supported.
     */
    route.post('/:Type/Tag/List/:Amount', function (response, request) {
        throw "Route yet to be defined";
    });
    /*
     * /:Type/:Function/Tag
     * Method: post
     * Remarks: Perform function on Tagged Type. Tag must be supported.
     */
    route.post('/:Type/:Function/Tag', function (response, request) {
        throw "Route yet to be defined";
    });
    exports["default"] = route = route;
});
