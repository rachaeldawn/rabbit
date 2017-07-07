/*
 * @property id: The id of a workorder, since there will only ever be 1 lock for 1 payrolls
 * @property user_id: The user that possesses the lock
 */
export default class PayrollLock {
	constructor(id, user_id){
	this.tablename = 'payroll_lock'
		this.id = id
		this.user_id = user_id
	}
}

PayrollLock.prototype.tablename = 'payroll_lock'
