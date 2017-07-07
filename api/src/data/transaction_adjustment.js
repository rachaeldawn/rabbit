/*
 * @property id: References the new transaction
 * @property original_transaction_id: References the origin transaction
 * @property memo: A required reason why the transaction was made. Max 400 characters
 */
export default class TransactionAdjustment {
	constructor(id, original_transaction_id, memo){
	this.tablename = 'transaction_adjustment'
		this.id = id
		this.original_transaction_id = original_transaction_id
		this.memo = memo
	}
}

TransactionAdjustment.prototype.tablename = 'transaction_adjustment'
