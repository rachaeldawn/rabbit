/*
 * @property id: Id of the employee payroll instance
 * @property transaction_id: Id of the transaction of the employee being paid
 * @property memo: Optional memo for the transaction. (max 400 characters)
 */
var tablename = 'payroll_transaction';
var PayrollTransaction = (function () {
    function PayrollTransaction(id, transaction_id, memo) {
        this.id = id;
        this.transaction_id = transaction_id;
        this.memo = memo;
    }
    return PayrollTransaction;
}());
PayrollTransaction.prototype.tablename = tablename;
module.exports = PayrollTransaction;
module.exports.tablename = tablename;
//# sourceMappingURL=payroll_transaction.js.map