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
    exports.tablename = 'payroll_transaction';
    var PayrollTransaction = (function () {
        function PayrollTransaction(id, transaction_id, memo) {
            this.id = id;
            this.transaction_id = transaction_id;
            this.memo = memo;
        }
        return PayrollTransaction;
    }());
    exports["default"] = PayrollTransaction;
});
