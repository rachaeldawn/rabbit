"use strict";
exports.__esModule = true;
var WorkorderTransaction = (function () {
    function WorkorderTransaction(id, workorder_id, contact_id, transaction_id) {
        this.tablename = 'workorder_transaction';
        this.id = id;
        this.workorder_id = workorder_id;
        this.contact_id = contact_id;
        this.transaction_id = transaction_id;
    }
    return WorkorderTransaction;
}());
exports["default"] = WorkorderTransaction;
WorkorderTransaction.prototype.tablename = 'workorder_transaction';
