/*
 * @property id: The Id of the permission
 * @property name: A max 32 character long name of the permission. Eg: CREATE_INVOICE, READ_ALL_INVOICE, READ_OWNED_INVOICES
 */
export const tablename = 'user_permission'
export default class UserPermission {
	constructor(id, name){
		this.id = id
		this.name = name
	}
}

