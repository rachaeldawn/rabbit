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
    exports.tablename = 'payroll_item';
    var PayrollItem = (function () {
        function PayrollItem(id, payroll_id, name, amount, quantity) {
            this.id = id;
            this.payroll_id = payroll_id;
            this.name = name;
            this.amount = amount;
            this.quantity = quantity;
        }
        return PayrollItem;
    }());
    exports["default"] = PayrollItem;
});
