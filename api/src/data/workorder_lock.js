/*
 * @property id: The id of a workorder, since there will only ever be 1 lock for 1 workorder
 * @property user_id: The user that possesses the lock
 */
export default class WorkorderLock {
	constructor(id, user_id){
	this.tablename = 'workorder_lock'
		this.id = id
		this.user_id = user_id
	}
}

WorkorderLock.prototype.tablename = 'workorder_lock'
