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
     * @property id: The Id of the single transaction
     * @property amount: The amount of the transaction (positive or negative).
     * @property method: One of the enum values of transaction_method are stored in here. Describes what method of payment was used to process the transaction.
     * @property paid_on: The timestamp of when the transaction was made
     */
    exports.tablename = 'transaction';
    var Transaction = (function () {
        function Transaction(id, amount, method, paid_on) {
            this.id = id;
            this.amount = amount;
            this.method = method;
            this.paid_on = paid_on;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Transaction;
    }());
    exports["default"] = Transaction;
    Transaction.Delete = Data.Delete.bind(Transaction.Delete);
    Transaction.prototype.tablename = exports.tablename;
    Transaction.Page = Data.Page.bind(Transaction.Page);
    Transaction.List = Data.List.bind(Transaction.List);
    Transaction.Save = Data.Save.bind(Transaction.Save);
    Transaction.Sync = Data.Sync.bind(Transaction.Sync);
    Transaction.Search = Data.Search.bind(Transaction.Search);
    Transaction.Update = Data.Update.bind(Transaction.Update);
});