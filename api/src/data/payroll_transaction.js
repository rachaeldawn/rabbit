/*
 * @property id: Id of the employee payroll instance
 * @property transaction_id: Id of the transaction of the employee being paid
 * @property memo: Optional memo for the transaction. (max 400 characters)
 */
export default class PayrollTransaction {
	constructor(id, transaction_id, memo){
	this.tablename = 'payroll_transaction'
		this.id = id
		this.transaction_id = transaction_id
		this.memo = memo
	}
}

PayrollTransaction.prototype.tablename = 'payroll_transaction'
