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
     * @property id: The id of the bill being referenced.
     * @property transaction_id: The id of the transaction to be bound.
     */
    exports.tablename = 'bill_transaction';
    var BillTransaction = (function () {
        function BillTransaction(id, transaction_id) {
            this.id = id;
            this.transaction_id = transaction_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return BillTransaction;
    }());
    exports["default"] = BillTransaction;
    BillTransaction.Delete = Data.Delete.bind(BillTransaction.Delete);
    BillTransaction.prototype.tablename = exports.tablename;
    BillTransaction.Page = Data.Page.bind(BillTransaction.Page);
    BillTransaction.List = Data.List.bind(BillTransaction.List);
    BillTransaction.Save = Data.Save.bind(BillTransaction.Save);
    BillTransaction.Sync = Data.Sync.bind(BillTransaction.Sync);
    BillTransaction.Search = Data.Search.bind(BillTransaction.Search);
    BillTransaction.Update = Data.Update.bind(BillTransaction.Update);
});
