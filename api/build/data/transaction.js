"use strict";
exports.__esModule = true;
var Transaction = (function () {
    function Transaction(id, amount, method, paid_on) {
        this.tablename = 'transaction';
        this.id = id;
        this.amount = amount;
        this.method = method;
        this.paid_on = paid_on;
    }
    return Transaction;
}());
exports["default"] = Transaction;
Transaction.prototype.tablename = 'transaction';
