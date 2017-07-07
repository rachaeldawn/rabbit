"use strict";
exports.__esModule = true;
var PurchaseOrderTransaction = (function () {
    function PurchaseOrderTransaction(id, purchase_order_id, transaction_id) {
        this.tablename = 'purchase_order_transaction';
        this.id = id;
        this.purchase_order_id = purchase_order_id;
        this.transaction_id = transaction_id;
    }
    return PurchaseOrderTransaction;
}());
exports["default"] = PurchaseOrderTransaction;
PurchaseOrderTransaction.prototype.tablename = 'purchase_order_transaction';
