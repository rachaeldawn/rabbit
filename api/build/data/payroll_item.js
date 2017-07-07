"use strict";
exports.__esModule = true;
var PayrollItem = (function () {
    function PayrollItem(id, payroll_id, name, amount, quantity) {
        this.tablename = 'payroll_item';
        this.id = id;
        this.payroll_id = payroll_id;
        this.name = name;
        this.amount = amount;
        this.quantity = quantity;
    }
    return PayrollItem;
}());
exports["default"] = PayrollItem;
PayrollItem.prototype.tablename = 'payroll_item';
