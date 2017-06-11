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
    exports.tablename = 'estimate_item';
    var EstimateItem = (function () {
        function EstimateItem(id, estimate_id, service_id, quantity) {
            this.id = id;
            this.estimate_id = estimate_id;
            this.service_id = service_id;
            this.quantity = quantity;
        }
        return EstimateItem;
    }());
    exports["default"] = EstimateItem;
});
