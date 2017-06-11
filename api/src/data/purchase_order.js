/*
 * @property id: The id of a purchase order
 * @property memo: Optional memo for the purchase order. (max 400 characters)
 * @property creator_id: The id of the employee that created the purchase order.
 * @property opened_on: When the purchase order was opened. This is not to be editable client side.
 * @property completed_on: Null if incomplete, or the timestamp of when it was closed.
 */
export const tablename = 'purchase_order'
export default class PurchaseOrder {
	constructor(id, memo, creator_id, opened_on, completed_on){
		this.id = id
		this.memo = memo
		this.creator_id = creator_id
		this.opened_on = opened_on
		this.completed_on = completed_on
	}
}

