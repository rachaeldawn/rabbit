var Data = require("../data")
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
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

PayrollItem.prototype.tablename = tablename
PayrollItem.Delete = Data.Delete.bind(PayrollItem.Delete)
PayrollItem.Page = Data.Page.bind(PayrollItem.Page)
PayrollItem.List = Data.List.bind(PayrollItem.List)
PayrollItem.Save = Data.Save.bind(PayrollItem.Save)
PayrollItem.Sync = Data.Sync.bind(PayrollItem.Sync)
PayrollItem.Search = Data.Search.bind(PayrollItem.Search)
PayrollItem.Update = Data.Update.bind(PayrollItem.Update)
module.exports = PayrollItem
module.exports.tablename = tablename
