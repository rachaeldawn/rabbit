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
    exports.tablename = 'pay_period';
    var PayPeriod = (function () {
        function PayPeriod(id, start_date, end_date, pay_date) {
            this.id = id;
            this.start_date = start_date;
            this.end_date = end_date;
            this.pay_date = pay_date;
        }
        return PayPeriod;
    }());
    exports["default"] = PayPeriod;
});
