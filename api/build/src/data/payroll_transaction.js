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
     * @property id: Id of the employee payroll instance
     * @property transaction_id: Id of the transaction of the employee being paid
     * @property memo: Optional memo for the transaction. (max 400 characters)
     */
    exports.tablename = 'payroll_transaction';
    var PayrollTransaction = (function () {
        function PayrollTransaction(id, transaction_id, memo) {
            this.id = id;
            this.transaction_id = transaction_id;
            this.memo = memo;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return PayrollTransaction;
    }());
    exports["default"] = PayrollTransaction;
    PayrollTransaction.Delete = Data.Delete.bind(PayrollTransaction.Delete);
    PayrollTransaction.prototype.tablename = exports.tablename;
    PayrollTransaction.Page = Data.Page.bind(PayrollTransaction.Page);
    PayrollTransaction.List = Data.List.bind(PayrollTransaction.List);
    PayrollTransaction.Save = Data.Save.bind(PayrollTransaction.Save);
    PayrollTransaction.Sync = Data.Sync.bind(PayrollTransaction.Sync);
    PayrollTransaction.Search = Data.Search.bind(PayrollTransaction.Search);
    PayrollTransaction.Update = Data.Update.bind(PayrollTransaction.Update);
});
