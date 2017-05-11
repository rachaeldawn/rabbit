/*
 * @property id: Id of an item on a workorder
 * @property workorder_id: Id of the workorder this item belongs to
 * @property service_id: Id of this item
 * @property quantity: The quantity of this item
 */
const tablename = 'workorder_item'
class WorkorderItem {
	constructor(id, workorder_id, service_id, quantity){
		this.id = id
		this.workorder_id = workorder_id
		this.service_id = service_id
		this.quantity = quantity
		this.tablename = 'workorder_item'
	}
}
WorkorderItem.prototype.tablename = 'workorder_item'
module.exports = WorkorderItem
module.exports.tablename = tablename
