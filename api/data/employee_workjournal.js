/*
 * @property id: Id of a single work-journal (employees can have many)
 * @property employee_id: Id of the employee that owns the work journal
 * @property name: The name of the work journal
 */
class EmployeeWorkjournal {
	constructor(id, employee_id, name){
		this.id = id
		this.employee_id = employee_id
		this.name = name
	}
}
module.exports = EmployeeWorkjournal
module.exports.tableName = 'employee_workjournal'