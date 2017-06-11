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
    exports.tablename = 'estimate_contact';
    var EstimateContact = (function () {
        function EstimateContact(id, estimate_id, contact_id) {
            this.id = id;
            this.estimate_id = estimate_id;
            this.contact_id = contact_id;
        }
        return EstimateContact;
    }());
    exports["default"] = EstimateContact;
});
