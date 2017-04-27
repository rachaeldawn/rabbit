/*
 * @property id: The id of the payroll instance
 * @property employee_id: integer REFERENCES employee(id) NOT NULL,
 * @property pay_period_id: integer REFERENCES pay_period(id) NOT NULL
 */
class Payroll {
	constructor(id, employee_id, pay_period_id){
		this.id = id
		this.employee_id = employee_id
		this.pay_period_id = pay_period_id
	}
}
module.exports = Payroll
module.exports.tableName = 'payroll'
