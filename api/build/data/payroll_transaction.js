"use strict";
exports.__esModule = true;
var PayrollTransaction = (function () {
    function PayrollTransaction(id, transaction_id, memo) {
        this.tablename = 'payroll_transaction';
        this.id = id;
        this.transaction_id = transaction_id;
        this.memo = memo;
    }
    return PayrollTransaction;
}());
exports["default"] = PayrollTransaction;
PayrollTransaction.prototype.tablename = 'payroll_transaction';
