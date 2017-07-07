"use strict";
exports.__esModule = true;
var Payroll = (function () {
    function Payroll(id, employee_id, pay_period_id) {
        this.tablename = 'payroll';
        this.id = id;
        this.employee_id = employee_id;
        this.pay_period_id = pay_period_id;
    }
    return Payroll;
}());
exports["default"] = Payroll;
Payroll.prototype.tablename = 'payroll';
