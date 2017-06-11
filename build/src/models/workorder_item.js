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
    exports.tablename = 'workorder_item';
    var WorkorderItem = (function () {
        function WorkorderItem(id, workorder_id, service_id, quantity) {
            this.id = id;
            this.workorder_id = workorder_id;
            this.service_id = service_id;
            this.quantity = quantity;
        }
        return WorkorderItem;
    }());
    exports["default"] = WorkorderItem;
});
