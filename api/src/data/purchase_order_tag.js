var Data = require("../data")
/*
 * @property id: The Id of the purchase order that this tag is attached to.
 * @property tag_id: The id of the tag to be bound
 */
export const tablename = 'purchase_order_tag'
export default class PurchaseOrderTag {
	constructor(id, tag_id){
		this.id = id
		this.tag_id = tag_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

PurchaseOrderTag.Delete     = Data.Delete.bind(PurchaseOrderTag.Delete)
PurchaseOrderTag.prototype.tablename = tablename
PurchaseOrderTag.Page       = Data.Page.bind(PurchaseOrderTag.Page)
PurchaseOrderTag.List       = Data.List.bind(PurchaseOrderTag.List)
PurchaseOrderTag.Save       = Data.Save.bind(PurchaseOrderTag.Save)
PurchaseOrderTag.Sync       = Data.Sync.bind(PurchaseOrderTag.Sync)
PurchaseOrderTag.Search     = Data.Search.bind(PurchaseOrderTag.Search)
PurchaseOrderTag.Update     = Data.Update.bind(PurchaseOrderTag.Update)
