/*
 * @property id: The id of the entry on the estimate
 * @property estimate_id: The id of the estimate this is attached to
 * @property service_id: The id of the service that is being offered
 * @property quantity: The amount of the item estimated in the quantity * price equation
 */
export default class EstimateItem {
	constructor(id, estimate_id, service_id, quantity){
	this.tablename = 'estimate_item'
		this.id = id
		this.estimate_id = estimate_id
		this.service_id = service_id
		this.quantity = quantity
	}
}

EstimateItem.prototype.tablename = 'estimate_item'
