/*
 * @property id: The Id of the permission
 * @property name: A max 32 character long name of the permission. Eg: CREATE_INVOICE, READ_ALL_INVOICE, READ_OWNED_INVOICES
 */
class UserPermission {
	constructor(id, name){
		this.id = id
		this.name = name
	}
}
module.exports = UserPermission
module.exports.tableName = 'user_permission'
