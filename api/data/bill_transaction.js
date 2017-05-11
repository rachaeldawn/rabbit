/*
 * @property id: The id of the bill being referenced.
 * @property transaction_id: The id of the transaction to be bound.
 */
const tablename = 'bill_transaction'
class BillTransaction {
	constructor(id, transaction_id){
		this.id = id
		this.transaction_id = transaction_id
		this.tablename = 'bill_transaction'
	}
}
BillTransaction.prototype.tablename = 'bill_transaction'
module.exports = BillTransaction
module.exports.tablename = tablename
