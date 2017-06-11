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
    exports.tablename = 'workorder';
    var Workorder = (function () {
        function Workorder(id, customer_id, rep_id, open_date, close_date) {
            this.id = id;
            this.customer_id = customer_id;
            this.rep_id = rep_id;
            this.open_date = open_date;
            this.close_date = close_date;
        }
        return Workorder;
    }());
    exports["default"] = Workorder;
});
