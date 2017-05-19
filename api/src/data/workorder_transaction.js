var Data = require("../data")
/*
 * @property id: Id of a transaction for a workorder.
 * @property workorder_id: The id of the workorder this transaction is bound to
 * @property contact_id: The id of the contact that made the transaction
 * @property transaction_id: The id of the transaction that is bound to the workorder
 */
export const tablename = 'workorder_transaction'
export default class WorkorderTransaction {
	constructor(id, workorder_id, contact_id, transaction_id){
		this.id = id
		this.workorder_id = workorder_id
		this.contact_id = contact_id
		this.transaction_id = transaction_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

WorkorderTransaction.Delete     = Data.Delete.bind(WorkorderTransaction.Delete)
WorkorderTransaction.prototype.tablename = tablename
WorkorderTransaction.Page       = Data.Page.bind(WorkorderTransaction.Page)
WorkorderTransaction.List       = Data.List.bind(WorkorderTransaction.List)
WorkorderTransaction.Save       = Data.Save.bind(WorkorderTransaction.Save)
WorkorderTransaction.Sync       = Data.Sync.bind(WorkorderTransaction.Sync)
WorkorderTransaction.Search     = Data.Search.bind(WorkorderTransaction.Search)
WorkorderTransaction.Update     = Data.Update.bind(WorkorderTransaction.Update)
