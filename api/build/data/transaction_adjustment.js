/*
 * @property id: References the new transaction
 * @property original_transaction_id: References the origin transaction
 * @property memo: A required reason why the transaction was made. Max 400 characters
 */
var tablename = 'transaction_adjustment';
var TransactionAdjustment = (function () {
    function TransactionAdjustment(id, original_transaction_id, memo) {
        this.id = id;
        this.original_transaction_id = original_transaction_id;
        this.memo = memo;
    }
    return TransactionAdjustment;
}());
TransactionAdjustment.prototype.tablename = tablename;
module.exports = TransactionAdjustment;
module.exports.tablename = tablename;
//# sourceMappingURL=transaction_adjustment.js.map