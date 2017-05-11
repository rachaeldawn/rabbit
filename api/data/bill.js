/*
 * @property id: The id of this instance
 * @property expense_id: A required field linking to an expense 
 * @property amount: The cost of the bill on this instance
 * @property billing_date: The date of the bill
 */
const tablename = 'bill'
class Bill {
	constructor(id, expense_id, amount, billing_date){
		this.id = id
		this.expense_id = expense_id
		this.amount = amount
		this.billing_date = billing_date
		this.tablename = 'bill'
	}
}
Bill.prototype.tablename = 'bill'
module.exports = Bill
module.exports.tablename = tablename
