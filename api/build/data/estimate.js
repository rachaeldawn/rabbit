/*
 * @property id: The id of the estimate
 * @property customer_id: The customer_id attached to the estimate
 * @property rep_id: The id of the employee that opened the estimate
 * @property open_date: The timestamp of when the estimate was opened/created
 * @property validity_period: Default 14, but max amount of days the estimate is good for
 */
var tablename = 'estimate';
var Estimate = (function () {
    function Estimate(id, customer_id, rep_id, open_date, validity_period) {
        this.id = id;
        this.customer_id = customer_id;
        this.rep_id = rep_id;
        this.open_date = open_date;
        this.validity_period = validity_period;
    }
    return Estimate;
}());
Estimate.prototype.tablename = tablename;
module.exports = Estimate;
module.exports.tablename = tablename;
//# sourceMappingURL=estimate.js.map