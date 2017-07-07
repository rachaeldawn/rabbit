/*
 * @property id: The id of the bill being referenced.
 * @property transaction_id: The id of the transaction to be bound.
 */
export default class BillTransaction {
	constructor(id, transaction_id){
	this.tablename = 'bill_transaction'
		this.id = id
		this.transaction_id = transaction_id
	}
}

BillTransaction.prototype.tablename = 'bill_transaction'
