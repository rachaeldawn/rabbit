/*
 * @property id: The id of a workorder, since there will only ever be 1 lock for 1 bills
 * @property user_id: The user that possesses the lock
 */
export default class BillLock {
	constructor(id, user_id){
	this.tablename = 'bill_lock'
		this.id = id
		this.user_id = user_id
	}
}

BillLock.prototype.tablename = 'bill_lock'
