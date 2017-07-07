"use strict";
exports.__esModule = true;
var PurchaseOrder = (function () {
    function PurchaseOrder(id, memo, creator_id, opened_on, completed_on) {
        this.tablename = 'purchase_order';
        this.id = id;
        this.memo = memo;
        this.creator_id = creator_id;
        this.opened_on = opened_on;
        this.completed_on = completed_on;
    }
    return PurchaseOrder;
}());
exports["default"] = PurchaseOrder;
PurchaseOrder.prototype.tablename = 'purchase_order';
