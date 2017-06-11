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
    exports.tablename = 'bill_transaction';
    var BillTransaction = (function () {
        function BillTransaction(id, transaction_id) {
            this.id = id;
            this.transaction_id = transaction_id;
        }
        return BillTransaction;
    }());
    exports["default"] = BillTransaction;
});
