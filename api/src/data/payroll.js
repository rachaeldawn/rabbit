var Data = require("../data")
/*
 * @property id: The id of the payroll instance
 * @property employee_id: The id of the employee for this pay
 * @property pay_period_id: The pay period of this pay
 */
export const tablename = 'payroll'
export default class Payroll {
	constructor(id, employee_id, pay_period_id){
		this.id = id
		this.employee_id = employee_id
		this.pay_period_id = pay_period_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Payroll.Delete     = Data.Delete.bind(Payroll.Delete)
Payroll.prototype.tablename = tablename
Payroll.Page       = Data.Page.bind(Payroll.Page)
Payroll.List       = Data.List.bind(Payroll.List)
Payroll.Save       = Data.Save.bind(Payroll.Save)
Payroll.Sync       = Data.Sync.bind(Payroll.Sync)
Payroll.Search     = Data.Search.bind(Payroll.Search)
Payroll.Update     = Data.Update.bind(Payroll.Update)
