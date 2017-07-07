"use strict";
exports.__esModule = true;
var EstimateItem = (function () {
    function EstimateItem(id, estimate_id, service_id, quantity) {
        this.tablename = 'estimate_item';
        this.id = id;
        this.estimate_id = estimate_id;
        this.service_id = service_id;
        this.quantity = quantity;
    }
    return EstimateItem;
}());
exports["default"] = EstimateItem;
EstimateItem.prototype.tablename = 'estimate_item';
