/*
 * @property id: The Id of the permission
 * @property name: A max 32 character long name of the permission. Eg: CREATE_INVOICE, READ_ALL_INVOICE, READ_OWNED_INVOICES
 */
export default class UserPermission {
	constructor(id, name){
	this.tablename = 'user_permission'
		this.id = id
		this.name = name
	}
}

UserPermission.prototype.tablename = 'user_permission'
