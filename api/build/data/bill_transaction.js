/*
 * @property id: The id of the bill being referenced.
 * @property transaction_id: The id of the transaction to be bound.
 */
var tablename = 'bill_transaction';
var BillTransaction = (function () {
    function BillTransaction(id, transaction_id) {
        this.id = id;
        this.transaction_id = transaction_id;
    }
    return BillTransaction;
}());
BillTransaction.prototype.tablename = tablename;
module.exports = BillTransaction;
module.exports.tablename = tablename;
//# sourceMappingURL=bill_transaction.js.map