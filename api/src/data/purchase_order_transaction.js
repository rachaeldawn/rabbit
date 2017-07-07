/*
 * @property id: The id of a transaction for the purchase order.
 * @property purchase_order_id: The Id of the purchase order
 * @property transaction_id: The id of the transaction made
 */
export default class PurchaseOrderTransaction {
	constructor(id, purchase_order_id, transaction_id){
	this.tablename = 'purchase_order_transaction'
		this.id = id
		this.purchase_order_id = purchase_order_id
		this.transaction_id = transaction_id
	}
}

PurchaseOrderTransaction.prototype.tablename = 'purchase_order_transaction'
