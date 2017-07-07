"use strict";
exports.__esModule = true;
var TransactionAdjustment = (function () {
    function TransactionAdjustment(id, original_transaction_id, memo) {
        this.tablename = 'transaction_adjustment';
        this.id = id;
        this.original_transaction_id = original_transaction_id;
        this.memo = memo;
    }
    return TransactionAdjustment;
}());
exports["default"] = TransactionAdjustment;
TransactionAdjustment.prototype.tablename = 'transaction_adjustment';
