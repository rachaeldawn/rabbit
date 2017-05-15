/*
 * @property id: serial PRIMARY KEY,
 * @property start_date: The starting date of the pay-period
 * @property end_date: The ending date of the pay-period
 * @property pay_date: The date the pay is to be provided to employees
 */
var tablename = 'pay_period';
var PayPeriod = (function () {
    function PayPeriod(id, start_date, end_date, pay_date) {
        this.id = id;
        this.start_date = start_date;
        this.end_date = end_date;
        this.pay_date = pay_date;
    }
    return PayPeriod;
}());
PayPeriod.prototype.tablename = tablename;
module.exports = PayPeriod;
module.exports.tablename = tablename;
//# sourceMappingURL=pay_period.js.map