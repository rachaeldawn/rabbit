/*
 * @property id: The id of an estimate, since there will only ever be 1 lock for 1 estimate.
 * @property user_id: The user that possesses the lock
 */
export default class EstimateLock {
	constructor(id, user_id){
	this.tablename = 'estimate_lock'
		this.id = id
		this.user_id = user_id
	}
}

EstimateLock.prototype.tablename = 'estimate_lock'
