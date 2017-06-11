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
    exports.tablename = 'transaction_adjustment';
    var TransactionAdjustment = (function () {
        function TransactionAdjustment(id, original_transaction_id, memo) {
            this.id = id;
            this.original_transaction_id = original_transaction_id;
            this.memo = memo;
        }
        return TransactionAdjustment;
    }());
    exports["default"] = TransactionAdjustment;
});
