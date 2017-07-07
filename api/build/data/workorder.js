"use strict";
exports.__esModule = true;
var Workorder = (function () {
    function Workorder(id, customer_id, rep_id, open_date, close_date) {
        this.tablename = 'workorder';
        this.id = id;
        this.customer_id = customer_id;
        this.rep_id = rep_id;
        this.open_date = open_date;
        this.close_date = close_date;
    }
    return Workorder;
}());
exports["default"] = Workorder;
Workorder.prototype.tablename = 'workorder';
