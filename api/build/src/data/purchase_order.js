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
     * @property id: The id of a purchase order
     * @property creator_id: The id of the employee that created the purchase order.
     * @property opened_on: When the purchase order was opened. This is not to be editable client side.
     * @property completed_on: Null if incomplete, or the timestamp of when it was closed.
     */
    exports.tablename = 'purchase_order';
    var PurchaseOrder = (function () {
        function PurchaseOrder(id, creator_id, opened_on, completed_on) {
            this.id = id;
            this.creator_id = creator_id;
            this.opened_on = opened_on;
            this.completed_on = completed_on;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return PurchaseOrder;
    }());
    exports["default"] = PurchaseOrder;
    PurchaseOrder.Delete = Data.Delete.bind(PurchaseOrder.Delete);
    PurchaseOrder.prototype.tablename = exports.tablename;
    PurchaseOrder.Page = Data.Page.bind(PurchaseOrder.Page);
    PurchaseOrder.List = Data.List.bind(PurchaseOrder.List);
    PurchaseOrder.Save = Data.Save.bind(PurchaseOrder.Save);
    PurchaseOrder.Sync = Data.Sync.bind(PurchaseOrder.Sync);
    PurchaseOrder.Search = Data.Search.bind(PurchaseOrder.Search);
    PurchaseOrder.Update = Data.Update.bind(PurchaseOrder.Update);
});
