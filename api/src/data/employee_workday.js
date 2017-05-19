var Data = require("../data")
/*
 * @property id: Id of a single workday 
 * @property employee_id: The Id of the employee
 * @property clock_in: When the employee clocks in
 * @property clock_out: When the employee clocks out
 */
export const tablename = 'employee_workday'
export default class EmployeeWorkday {
	constructor(id, employee_id, clock_in, clock_out){
		this.id = id
		this.employee_id = employee_id
		this.clock_in = clock_in
		this.clock_out = clock_out
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

EmployeeWorkday.Delete     = Data.Delete.bind(EmployeeWorkday.Delete)
EmployeeWorkday.prototype.tablename = tablename
EmployeeWorkday.Page       = Data.Page.bind(EmployeeWorkday.Page)
EmployeeWorkday.List       = Data.List.bind(EmployeeWorkday.List)
EmployeeWorkday.Save       = Data.Save.bind(EmployeeWorkday.Save)
EmployeeWorkday.Sync       = Data.Sync.bind(EmployeeWorkday.Sync)
EmployeeWorkday.Search     = Data.Search.bind(EmployeeWorkday.Search)
EmployeeWorkday.Update     = Data.Update.bind(EmployeeWorkday.Update)
