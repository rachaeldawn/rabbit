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
    exports.tablename = 'purchase_order_transaction';
    var PurchaseOrderTransaction = (function () {
        function PurchaseOrderTransaction(id, purchase_order_id, transaction_id) {
            this.id = id;
            this.purchase_order_id = purchase_order_id;
            this.transaction_id = transaction_id;
        }
        return PurchaseOrderTransaction;
    }());
    exports["default"] = PurchaseOrderTransaction;
});
