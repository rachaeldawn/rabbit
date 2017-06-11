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
    exports.tablename = 'transaction';
    var Transaction = (function () {
        function Transaction(id, amount, method, paid_on) {
            this.id = id;
            this.amount = amount;
            this.method = method;
            this.paid_on = paid_on;
        }
        return Transaction;
    }());
    exports["default"] = Transaction;
});
