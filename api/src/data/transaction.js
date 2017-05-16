var Data = require("../data")
/*
 * @property id: The Id of the single transaction
 * @property amount: The amount of the transaction (positive or negative).
 * @property method: One of the enum values of transaction_method are stored in here. Describes what method of payment was used to process the transaction.
 * @property paid_on: The timestamp of when the transaction was made
 */
const tablename = 'transaction'
class Transaction {
	constructor(id, amount, method, paid_on){
		this.id = id
		this.amount = amount
		this.method = method
		this.paid_on = paid_on
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Transaction.prototype.tablename = tablename
Transaction.Delete = Data.Delete.bind(Transaction.Delete)
Transaction.Page = Data.Page.bind(Transaction.Page)
Transaction.List = Data.List.bind(Transaction.List)
Transaction.Save = Data.Save.bind(Transaction.Save)
Transaction.Sync = Data.Sync.bind(Transaction.Sync)
Transaction.Search = Data.Search.bind(Transaction.Search)
Transaction.Update = Data.Update.bind(Transaction.Update)
module.exports = Transaction
module.exports.tablename = tablename
