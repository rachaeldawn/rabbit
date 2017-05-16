var Data = require("../data")
/*
 * @property id: The id of a transaction for the purchase order.
 * @property purchase_order_id: The Id of the purchase order
 * @property transaction_id: The id of the transaction made
 */
const tablename = 'purchase_order_transaction'
class PurchaseOrderTransaction {
	constructor(id, purchase_order_id, transaction_id){
		this.id = id
		this.purchase_order_id = purchase_order_id
		this.transaction_id = transaction_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

PurchaseOrderTransaction.prototype.tablename = tablename
PurchaseOrderTransaction.Delete = Data.Delete.bind(PurchaseOrderTransaction.Delete)
PurchaseOrderTransaction.Page = Data.Page.bind(PurchaseOrderTransaction.Page)
PurchaseOrderTransaction.List = Data.List.bind(PurchaseOrderTransaction.List)
PurchaseOrderTransaction.Save = Data.Save.bind(PurchaseOrderTransaction.Save)
PurchaseOrderTransaction.Sync = Data.Sync.bind(PurchaseOrderTransaction.Sync)
PurchaseOrderTransaction.Search = Data.Search.bind(PurchaseOrderTransaction.Search)
PurchaseOrderTransaction.Update = Data.Update.bind(PurchaseOrderTransaction.Update)
module.exports = PurchaseOrderTransaction
module.exports.tablename = tablename
