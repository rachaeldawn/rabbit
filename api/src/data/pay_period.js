var Data = require("../data")
/*
 * @property id: serial PRIMARY KEY,
 * @property start_date: The starting date of the pay-period
 * @property end_date: The ending date of the pay-period
 * @property pay_date: The date the pay is to be provided to employees
 */
export const tablename = 'pay_period'
export default class PayPeriod {
	constructor(id, start_date, end_date, pay_date){
		this.id = id
		this.start_date = start_date
		this.end_date = end_date
		this.pay_date = pay_date
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

PayPeriod.Delete     = Data.Delete.bind(PayPeriod.Delete)
PayPeriod.prototype.tablename = tablename
PayPeriod.Page       = Data.Page.bind(PayPeriod.Page)
PayPeriod.List       = Data.List.bind(PayPeriod.List)
PayPeriod.Save       = Data.Save.bind(PayPeriod.Save)
PayPeriod.Sync       = Data.Sync.bind(PayPeriod.Sync)
PayPeriod.Search     = Data.Search.bind(PayPeriod.Search)
PayPeriod.Update     = Data.Update.bind(PayPeriod.Update)
