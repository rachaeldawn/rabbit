var Data = require("../data")
/*
 * @property id: Id of the employee payroll instance
 * @property transaction_id: Id of the transaction of the employee being paid
 * @property memo: Optional memo for the transaction. (max 400 characters)
 */
const tablename = 'payroll_transaction'
class PayrollTransaction {
	constructor(id, transaction_id, memo){
		this.id = id
		this.transaction_id = transaction_id
		this.memo = memo
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

PayrollTransaction.prototype.tablename = tablename
PayrollTransaction.Delete = Data.Delete.bind(PayrollTransaction.Delete)
PayrollTransaction.Page = Data.Page.bind(PayrollTransaction.Page)
PayrollTransaction.List = Data.List.bind(PayrollTransaction.List)
PayrollTransaction.Save = Data.Save.bind(PayrollTransaction.Save)
PayrollTransaction.Sync = Data.Sync.bind(PayrollTransaction.Sync)
PayrollTransaction.Search = Data.Search.bind(PayrollTransaction.Search)
PayrollTransaction.Update = Data.Update.bind(PayrollTransaction.Update)
module.exports = PayrollTransaction
module.exports.tablename = tablename
