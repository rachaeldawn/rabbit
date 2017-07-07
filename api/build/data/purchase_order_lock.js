"use strict";
exports.__esModule = true;
var PurchaseOrderLock = (function () {
    function PurchaseOrderLock(id, user_id) {
        this.tablename = 'purchase_order_lock';
        this.id = id;
        this.user_id = user_id;
    }
    return PurchaseOrderLock;
}());
exports["default"] = PurchaseOrderLock;
PurchaseOrderLock.prototype.tablename = 'purchase_order_lock';
