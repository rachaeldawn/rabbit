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
     * @property id: The id of the payroll instance
     * @property employee_id: The id of the employee for this pay
     * @property pay_period_id: The pay period of this pay
     */
    exports.tablename = 'payroll';
    var Payroll = (function () {
        function Payroll(id, employee_id, pay_period_id) {
            this.id = id;
            this.employee_id = employee_id;
            this.pay_period_id = pay_period_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Payroll;
    }());
    exports["default"] = Payroll;
    Payroll.Delete = Data.Delete.bind(Payroll.Delete);
    Payroll.prototype.tablename = exports.tablename;
    Payroll.Page = Data.Page.bind(Payroll.Page);
    Payroll.List = Data.List.bind(Payroll.List);
    Payroll.Save = Data.Save.bind(Payroll.Save);
    Payroll.Sync = Data.Sync.bind(Payroll.Sync);
    Payroll.Search = Data.Search.bind(Payroll.Search);
    Payroll.Update = Data.Update.bind(Payroll.Update);
});
