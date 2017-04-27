/*
 * @property id: References the new transaction
 * @property original_transaction_id: References the origin transaction
 * @property memo: A required reason why the transaction was made. Max 400 characters
 */
class TransactionAdjustment {
	constructor(id, original_transaction_id, memo){
		this.id = id
		this.original_transaction_id = original_transaction_id
		this.memo = memo
	}
}
module.exports = TransactionAdjustment
module.exports.tableName = 'transaction_adjustment'
