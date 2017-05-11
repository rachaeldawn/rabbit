/*
 * @property id: The id of an entry on a payroll
 * @property payroll_id: The id of the payroll instance for an employee
 * @property name: A max 50-character length name of the transaction
 * @property amount: The unit of money being paid/deducted ($x / quantity)
 * @property quantity: The quantity of the amount to be paid/deducted (multiplier)
 */
const tablename = 'payroll_item'
class PayrollItem {
	constructor(id, payroll_id, name, amount, quantity){
		this.id = id
		this.payroll_id = payroll_id
		this.name = name
		this.amount = amount
		this.quantity = quantity
		this.tablename = 'payroll_item'
	}
}
PayrollItem.prototype.tablename = 'payroll_item'
module.exports = PayrollItem
module.exports.tablename = tablename
