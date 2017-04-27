/*
 * @property id: The Id of a specific workorder
 * @property customer_id: The customer_id attached to the workorder
 * @property rep_id: The id of the employee that opened the workorder
 * @property open_date: Timestamp that defaults to now 
 */
class Workorder {
	constructor(id, customer_id, rep_id, open_date){
		this.id = id
		this.customer_id = customer_id
		this.rep_id = rep_id
		this.open_date = open_date
	}
}
module.exports = Workorder
module.exports.tableName = 'workorder'
