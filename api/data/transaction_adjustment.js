/*
 * @property id: References the new transaction
 * @property original_transaction_id: References the origin transaction
 * @property memo: A required reason why the transaction was made. Max 400 characters
 */
const tablename = 'transaction_adjustment'
class TransactionAdjustment {
	constructor(id, original_transaction_id, memo){
		this.id = id
		this.original_transaction_id = original_transaction_id
		this.memo = memo
		this.tablename = 'transaction_adjustment'
	}
}
TransactionAdjustment.prototype.tablename = 'transaction_adjustment'
module.exports = TransactionAdjustment
module.exports.tablename = tablename
