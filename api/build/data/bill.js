"use strict";
exports.__esModule = true;
var Bill = (function () {
    function Bill(id, expense_id, amount, billing_date) {
        this.tablename = 'bill';
        this.id = id;
        this.expense_id = expense_id;
        this.amount = amount;
        this.billing_date = billing_date;
    }
    return Bill;
}());
exports["default"] = Bill;
Bill.prototype.tablename = 'bill';
