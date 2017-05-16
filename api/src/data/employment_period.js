var Data = require("../data")
/*
 * @property id: Id of an employment period.
 * @property employee_id: Id of the employee table entry
 * @property start_date: Date the employee's employment period started
 * @property end_date: Date the employee's employment period ends (or null for still here)
 */
const tablename = 'employment_period'
class EmploymentPeriod {
	constructor(id, employee_id, start_date, end_date){
		this.id = id
		this.employee_id = employee_id
		this.start_date = start_date
		this.end_date = end_date
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

EmploymentPeriod.prototype.tablename = tablename
EmploymentPeriod.Delete = Data.Delete.bind(EmploymentPeriod.Delete)
EmploymentPeriod.Page = Data.Page.bind(EmploymentPeriod.Page)
EmploymentPeriod.List = Data.List.bind(EmploymentPeriod.List)
EmploymentPeriod.Save = Data.Save.bind(EmploymentPeriod.Save)
EmploymentPeriod.Sync = Data.Sync.bind(EmploymentPeriod.Sync)
EmploymentPeriod.Search = Data.Search.bind(EmploymentPeriod.Search)
EmploymentPeriod.Update = Data.Update.bind(EmploymentPeriod.Update)
module.exports = EmploymentPeriod
module.exports.tablename = tablename
