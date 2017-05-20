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
     * @property id: The id of a transaction for the purchase order.
     * @property purchase_order_id: The Id of the purchase order
     * @property transaction_id: The id of the transaction made
     */
    exports.tablename = 'purchase_order_transaction';
    var PurchaseOrderTransaction = (function () {
        function PurchaseOrderTransaction(id, purchase_order_id, transaction_id) {
            this.id = id;
            this.purchase_order_id = purchase_order_id;
            this.transaction_id = transaction_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return PurchaseOrderTransaction;
    }());
    exports["default"] = PurchaseOrderTransaction;
    PurchaseOrderTransaction.Delete = Data.Delete.bind(PurchaseOrderTransaction.Delete);
    PurchaseOrderTransaction.prototype.tablename = exports.tablename;
    PurchaseOrderTransaction.Page = Data.Page.bind(PurchaseOrderTransaction.Page);
    PurchaseOrderTransaction.List = Data.List.bind(PurchaseOrderTransaction.List);
    PurchaseOrderTransaction.Save = Data.Save.bind(PurchaseOrderTransaction.Save);
    PurchaseOrderTransaction.Sync = Data.Sync.bind(PurchaseOrderTransaction.Sync);
    PurchaseOrderTransaction.Search = Data.Search.bind(PurchaseOrderTransaction.Search);
    PurchaseOrderTransaction.Update = Data.Update.bind(PurchaseOrderTransaction.Update);
});
