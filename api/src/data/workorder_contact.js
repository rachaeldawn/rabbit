/*
 * @property id: Id of an entry for contact to be bound with the workorder
 * @property workorder_id: Id of the workorder to be bound
 * @property contact_id: The id of the customer contact to be bound
 */
export const tablename = 'workorder_contact'
export default class WorkorderContact {
	constructor(id, workorder_id, contact_id){
		this.id = id
		this.workorder_id = workorder_id
		this.contact_id = contact_id
	}
}

