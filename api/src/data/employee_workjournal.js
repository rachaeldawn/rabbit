var Data = require("../data")
/*
 * @property id: Id of a single work-journal (employees can have many)
 * @property employee_id: Id of the employee that owns the work journal
 * @property name: The name of the work journal
 */
const tablename = 'employee_workjournal'
class EmployeeWorkjournal {
	constructor(id, employee_id, name){
		this.id = id
		this.employee_id = employee_id
		this.name = name
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

EmployeeWorkjournal.prototype.tablename = tablename
EmployeeWorkjournal.Delete = Data.Delete.bind(EmployeeWorkjournal.Delete)
EmployeeWorkjournal.Page = Data.Page.bind(EmployeeWorkjournal.Page)
EmployeeWorkjournal.List = Data.List.bind(EmployeeWorkjournal.List)
EmployeeWorkjournal.Save = Data.Save.bind(EmployeeWorkjournal.Save)
EmployeeWorkjournal.Sync = Data.Sync.bind(EmployeeWorkjournal.Sync)
EmployeeWorkjournal.Search = Data.Search.bind(EmployeeWorkjournal.Search)
EmployeeWorkjournal.Update = Data.Update.bind(EmployeeWorkjournal.Update)
module.exports = EmployeeWorkjournal
module.exports.tablename = tablename
