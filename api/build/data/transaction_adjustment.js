"use strict";
exports.__esModule = true;
exports.tablename = 'transaction_adjustment';
var TransactionAdjustment = (function () {
    function TransactionAdjustment(id, original_transaction_id, memo) {
        this.id = id;
        this.original_transaction_id = original_transaction_id;
        this.memo = memo;
    }
    return TransactionAdjustment;
}());
exports["default"] = TransactionAdjustment;
