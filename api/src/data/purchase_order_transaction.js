/*
 * @property id: The id of a transaction for the purchase order.
 * @property purchase_order_id: The Id of the purchase order
 * @property transaction_id: The id of the transaction made
 */
const tablename = 'purchase_order_transaction'
class PurchaseOrderTransaction {
	constructor(id, purchase_order_id, transaction_id){
		this.id = id
		this.purchase_order_id = purchase_order_id
		this.transaction_id = transaction_id
	}
}
PurchaseOrderTransaction.prototype.tablename = tablename
module.exports = PurchaseOrderTransaction
module.exports.tablename = tablename
