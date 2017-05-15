/*
 * @property id: The id of the entry on the estimate
 * @property estimate_id: The id of the estimate this is attached to
 * @property service_id: The id of the service that is being offered
 * @property quantity: The amount of the item estimated in the quantity * price equation
 */
const tablename = 'estimate_item'
class EstimateItem {
	constructor(id, estimate_id, service_id, quantity){
		this.id = id
		this.estimate_id = estimate_id
		this.service_id = service_id
		this.quantity = quantity
	}
}
EstimateItem.prototype.tablename = tablename
module.exports = EstimateItem
module.exports.tablename = tablename
