(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /*
     * Exported Functions:
     * 	CreateEstimate:
     * Private Functions:
     */
    /*
     * Purpose:
     * @param customer: The id or Customer object the estimate is for (default: undefined)
     * @param employee: The id or User object creating the estimate (default: undefined)
     * @param :  (default: undefined)
     */
    function CreateEstimate(customer, employee, any) {
        throw 'Not implemented';
    }
    exports.CreateEstimate = CreateEstimate;
});
