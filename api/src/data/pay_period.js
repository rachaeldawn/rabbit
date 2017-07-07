/*
 * @property id: serial PRIMARY KEY,
 * @property start_date: The starting date of the pay-period
 * @property end_date: The ending date of the pay-period
 * @property pay_date: The date the pay is to be provided to employees
 */
export default class PayPeriod {
	constructor(id, start_date, end_date, pay_date){
	this.tablename = 'pay_period'
		this.id = id
		this.start_date = start_date
		this.end_date = end_date
		this.pay_date = pay_date
	}
}

PayPeriod.prototype.tablename = 'pay_period'
