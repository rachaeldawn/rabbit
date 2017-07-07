"use strict";
exports.__esModule = true;
var WorkorderItem = (function () {
    function WorkorderItem(id, workorder_id, service_id, quantity) {
        this.tablename = 'workorder_item';
        this.id = id;
        this.workorder_id = workorder_id;
        this.service_id = service_id;
        this.quantity = quantity;
    }
    return WorkorderItem;
}());
exports["default"] = WorkorderItem;
WorkorderItem.prototype.tablename = 'workorder_item';
