/*
 * @property id: The id of the bill being referenced.
 * @property transaction_id: The id of the transaction to be bound.
 */
const tablename = 'bill_transaction'
class BillTransaction {
	constructor(id, transaction_id){
		this.id = id
		this.transaction_id = transaction_id
	}
}
BillTransaction.prototype.tablename = tablename
module.exports = BillTransaction
module.exports.tablename = tablename
