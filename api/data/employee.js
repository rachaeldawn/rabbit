/*
 * @property id: Id of a user_account relating to this employee. 1-1 relationship.
 * @property first_name: First name of employee (max 180 characters)
 * @property middle_name: Middle name of employee (max 180 characters)
 * @property last_name: Last name of employee (max 180 characters)
 * @property phone: String representation of employee's phone number
 * @property about: About me for employee (max 2500 characters)
 * @property home_address: Home street address of employee
 * @property postal_code: Postal code of employee
 * @property sin: SIN of employee
 * @property birthday: Birthday of employee
 * @property is_active: Whether or not the employee is with us.
 */
class Employee {
	constructor(id, first_name, middle_name, last_name, phone, about, home_address, postal_code, sin, birthday, is_active){
		this.id = id
		this.first_name = first_name
		this.middle_name = middle_name
		this.last_name = last_name
		this.phone = phone
		this.about = about
		this.home_address = home_address
		this.postal_code = postal_code
		this.sin = sin
		this.birthday = birthday
		this.is_active = is_active
	}
}
module.exports = Employee
module.exports.tableName = 'employee'
