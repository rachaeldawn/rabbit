/*
 * @property id: References the user account associated with this contact. 1-1 Relationship. 
 * @property first_name: First name of the contact
 * @property last_name: Last name of the contact
 * @property phone: Phone number of the contact
 * @property phone_extension: The phone extension of the contact
 * @property about: A max 2000 character length about to describe who the contact is, what they're permitted to authorize/do, and any other relevant details.
 */
class CustomerContact {
	constructor(id, first_name, last_name, phone, phone_extension, about){
		this.id = id
		this.first_name = first_name
		this.last_name = last_name
		this.phone = phone
		this.phone_extension = phone_extension
		this.about = about
	}
}
module.exports = CustomerContact
module.exports.tableName = 'customer_contact'
