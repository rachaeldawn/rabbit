/*
 * @property id: Id of a transaction for a workorder.
 * @property workorder_id: The id of the workorder this transaction is bound to
 * @property contact_id: The id of the contact that made the transaction
 * @property transaction_id: The id of the transaction that is bound to the workorder
 */
export default class WorkorderTransaction {
	constructor(id, workorder_id, contact_id, transaction_id){
	this.tablename = 'workorder_transaction'
		this.id = id
		this.workorder_id = workorder_id
		this.contact_id = contact_id
		this.transaction_id = transaction_id
	}
}

WorkorderTransaction.prototype.tablename = 'workorder_transaction'
