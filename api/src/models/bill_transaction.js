/*
 * @property id: The id of the bill being referenced.
 * @property transaction_id: The id of the transaction to be bound.
 */
export const tablename = 'bill_transaction'
export default class BillTransaction {
	constructor(id, transaction_id){
		this.id = id
		this.transaction_id = transaction_id
	}
}

