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
    exports.tablename = 'payroll';
    var Payroll = (function () {
        function Payroll(id, employee_id, pay_period_id) {
            this.id = id;
            this.employee_id = employee_id;
            this.pay_period_id = pay_period_id;
        }
        return Payroll;
    }());
    exports["default"] = Payroll;
});
