"use strict";
exports.__esModule = true;
var PurchaseOrderItem = (function () {
    function PurchaseOrderItem(id, purchase_order_id, name, description, quantity, price) {
        this.tablename = 'purchase_order_item';
        this.id = id;
        this.purchase_order_id = purchase_order_id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
    }
    return PurchaseOrderItem;
}());
exports["default"] = PurchaseOrderItem;
PurchaseOrderItem.prototype.tablename = 'purchase_order_item';
