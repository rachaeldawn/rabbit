"use strict";
exports.__esModule = true;
exports.tablename = 'purchase_order';
var PurchaseOrder = (function () {
    function PurchaseOrder(id, creator_id, opened_on, completed_on) {
        this.id = id;
        this.creator_id = creator_id;
        this.opened_on = opened_on;
        this.completed_on = completed_on;
    }
    return PurchaseOrder;
}());
exports["default"] = PurchaseOrder;
