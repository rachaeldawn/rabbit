var Data = require("../data")
/*
 * @property id: The id of the bill being referenced.
 * @property transaction_id: The id of the transaction to be bound.
 */
export const tablename = 'bill_transaction'
export default class BillTransaction {
	constructor(id, transaction_id){
		this.id = id
		this.transaction_id = transaction_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

BillTransaction.Delete     = Data.Delete.bind(BillTransaction.Delete)
BillTransaction.prototype.tablename = tablename
BillTransaction.Page       = Data.Page.bind(BillTransaction.Page)
BillTransaction.List       = Data.List.bind(BillTransaction.List)
BillTransaction.Save       = Data.Save.bind(BillTransaction.Save)
BillTransaction.Sync       = Data.Sync.bind(BillTransaction.Sync)
BillTransaction.Search     = Data.Search.bind(BillTransaction.Search)
BillTransaction.Update     = Data.Update.bind(BillTransaction.Update)
