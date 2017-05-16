var Data = require("../data");
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
        this.Update = Data.Update.bind(this.Update, this);
        this.Sync = Data.Sync.bind(this.Sync, this);
        this.Save = Data.Save.bind(this.Save, this);
        this.Delete = Data.Delete.bind(this.Delete, this);
    }
    return Estimate;
}());
Estimate.prototype.tablename = tablename;
Estimate.Delete = Data.Delete.bind(Estimate.Delete);
Estimate.Page = Data.Page.bind(Estimate.Page);
Estimate.List = Data.List.bind(Estimate.List);
Estimate.Save = Data.Save.bind(Estimate.Save);
Estimate.Sync = Data.Sync.bind(Estimate.Sync);
Estimate.Search = Data.Search.bind(Estimate.Search);
Estimate.Update = Data.Update.bind(Estimate.Update);
module.exports = Estimate;
module.exports.tablename = tablename;
//# sourceMappingURL=estimate.js.map