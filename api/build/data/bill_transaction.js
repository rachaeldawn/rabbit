"use strict";
exports.__esModule = true;
var BillTransaction = (function () {
    function BillTransaction(id, transaction_id) {
        this.tablename = 'bill_transaction';
        this.id = id;
        this.transaction_id = transaction_id;
    }
    return BillTransaction;
}());
exports["default"] = BillTransaction;
BillTransaction.prototype.tablename = 'bill_transaction';
