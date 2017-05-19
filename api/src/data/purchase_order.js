var Data = require("../data")
/*
 * @property id: The id of a purchase order
 * @property creator_id: The id of the employee that created the purchase order.
 * @property opened_on: When the purchase order was opened. This is not to be editable client side.
 * @property completed_on: Null if incomplete, or the timestamp of when it was closed.
 */
export const tablename = 'purchase_order'
export default class PurchaseOrder {
	constructor(id, creator_id, opened_on, completed_on){
		this.id = id
		this.creator_id = creator_id
		this.opened_on = opened_on
		this.completed_on = completed_on
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

PurchaseOrder.Delete     = Data.Delete.bind(PurchaseOrder.Delete)
PurchaseOrder.prototype.tablename = tablename
PurchaseOrder.Page       = Data.Page.bind(PurchaseOrder.Page)
PurchaseOrder.List       = Data.List.bind(PurchaseOrder.List)
PurchaseOrder.Save       = Data.Save.bind(PurchaseOrder.Save)
PurchaseOrder.Sync       = Data.Sync.bind(PurchaseOrder.Sync)
PurchaseOrder.Search     = Data.Search.bind(PurchaseOrder.Search)
PurchaseOrder.Update     = Data.Update.bind(PurchaseOrder.Update)
