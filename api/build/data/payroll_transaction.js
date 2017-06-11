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
