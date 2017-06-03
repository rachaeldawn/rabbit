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
	}
}
