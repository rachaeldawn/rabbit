/*
 * @property id: The id of a purchase order
 * @property creator_id: The id of the employee that created the purchase order.
 * @property opened_on: When the purchase order was opened. This is not to be editable client side.
 * @property completed_on: Null if incomplete, or the timestamp of when it was closed.
 */
class PurchaseOrder {
	constructor(id, creator_id, opened_on, completed_on){
		this.id = id
		this.creator_id = creator_id
		this.opened_on = opened_on
		this.completed_on = completed_on
	}
}
module.exports = PurchaseOrder
module.exports.tableName = 'purchase_order'
