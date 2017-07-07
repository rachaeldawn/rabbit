/*
 * @property id: The Id of the purchase order that this tag is attached to.
 * @property tag_id: The id of the tag to be bound
 */
export default class PurchaseOrderTag {
	constructor(id, tag_id){
	this.tablename = 'purchase_order_tag'
		this.id = id
		this.tag_id = tag_id
	}
}

PurchaseOrderTag.prototype.tablename = 'purchase_order_tag'
