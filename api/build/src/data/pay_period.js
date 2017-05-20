(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Data = require("../data");
    /*
     * @property id: serial PRIMARY KEY,
     * @property start_date: The starting date of the pay-period
     * @property end_date: The ending date of the pay-period
     * @property pay_date: The date the pay is to be provided to employees
     */
    exports.tablename = 'pay_period';
    var PayPeriod = (function () {
        function PayPeriod(id, start_date, end_date, pay_date) {
            this.id = id;
            this.start_date = start_date;
            this.end_date = end_date;
            this.pay_date = pay_date;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return PayPeriod;
    }());
    exports["default"] = PayPeriod;
    PayPeriod.Delete = Data.Delete.bind(PayPeriod.Delete);
    PayPeriod.prototype.tablename = exports.tablename;
    PayPeriod.Page = Data.Page.bind(PayPeriod.Page);
    PayPeriod.List = Data.List.bind(PayPeriod.List);
    PayPeriod.Save = Data.Save.bind(PayPeriod.Save);
    PayPeriod.Sync = Data.Sync.bind(PayPeriod.Sync);
    PayPeriod.Search = Data.Search.bind(PayPeriod.Search);
    PayPeriod.Update = Data.Update.bind(PayPeriod.Update);
});
