/*
 * @property id: The Id of the single transaction
 * @property amount: The amount of the transaction (positive or negative).
 * @property method: One of the enum values of transaction_method are stored in here. Describes what method of payment was used to process the transaction.
 * @property paid_on: The timestamp of when the transaction was made
 */
var tablename = 'transaction';
var Transaction = (function () {
    function Transaction(id, amount, method, paid_on) {
        this.id = id;
        this.amount = amount;
        this.method = method;
        this.paid_on = paid_on;
    }
    return Transaction;
}());
Transaction.prototype.tablename = tablename;
module.exports = Transaction;
module.exports.tablename = tablename;
//# sourceMappingURL=transaction.js.map