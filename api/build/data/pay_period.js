"use strict";
exports.__esModule = true;
var PayPeriod = (function () {
    function PayPeriod(id, start_date, end_date, pay_date) {
        this.tablename = 'pay_period';
        this.id = id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.pay_date = pay_date;
    }
    return PayPeriod;
}());
exports["default"] = PayPeriod;
PayPeriod.prototype.tablename = 'pay_period';
