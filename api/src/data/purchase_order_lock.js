/*
 * @property id: The id of a workorder, since there will only ever be 1 lock for 1 purchase orders
 * @property user_id: The user that possesses the lock
 */
export default class PurchaseOrderLock {
	constructor(id, user_id){
	this.tablename = 'purchase_order_lock'
		this.id = id
		this.user_id = user_id
	}
}

PurchaseOrderLock.prototype.tablename = 'purchase_order_lock'
