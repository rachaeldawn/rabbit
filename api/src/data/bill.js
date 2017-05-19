var Data = require("../data")
/*
 * @property id: The id of this instance
 * @property expense_id: A required field linking to an expense 
 * @property amount: The cost of the bill on this instance
 * @property billing_date: The date of the bill
 */
export const tablename = 'bill'
export default class Bill {
	constructor(id, expense_id, amount, billing_date){
		this.id = id
		this.expense_id = expense_id
		this.amount = amount
		this.billing_date = billing_date
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Bill.Delete     = Data.Delete.bind(Bill.Delete)
Bill.prototype.tablename = tablename
Bill.Page       = Data.Page.bind(Bill.Page)
Bill.List       = Data.List.bind(Bill.List)
Bill.Save       = Data.Save.bind(Bill.Save)
Bill.Sync       = Data.Sync.bind(Bill.Sync)
Bill.Search     = Data.Search.bind(Bill.Search)
Bill.Update     = Data.Update.bind(Bill.Update)
