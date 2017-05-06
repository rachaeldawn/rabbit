/*
 * @property id: Id of  this specific entry
 * @property estimate_id: The id of the estimate this is attached to
 * @property contact_id: The id of the contact that we are working with
 */
class EstimateContact {
	constructor(id, estimate_id, contact_id){
		this.id = id
		this.estimate_id = estimate_id
		this.contact_id = contact_id
		this.tablename = 'estimate_contact'
	}
}
module.exports = EstimateContact
