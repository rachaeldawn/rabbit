"use strict";
exports.__esModule = true;
var Estimate = (function () {
    function Estimate(id, customer_id, rep_id, open_date, validity_period) {
        this.tablename = 'estimate';
        this.id = id;
        this.customer_id = customer_id;
        this.rep_id = rep_id;
        this.open_date = open_date;
        this.validity_period = validity_period;
    }
    return Estimate;
}());
exports["default"] = Estimate;
Estimate.prototype.tablename = 'estimate';
