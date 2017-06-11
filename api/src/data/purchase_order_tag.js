/*
 * @property id: The Id of the purchase order that this tag is attached to.
 * @property tag_id: The id of the tag to be bound
 */
export const tablename = 'purchase_order_tag'
export default class PurchaseOrderTag {
	constructor(id, tag_id){
		this.id = id
		this.tag_id = tag_id
	}
}

