/*
 * @property id: The Id of the permission
 * @property name: A max 32 character long name of the permission. Eg: CREATE_INVOICE, READ_ALL_INVOICE, READ_OWNED_INVOICES
 */
const tablename = 'user_permission'
class UserPermission {
	constructor(id, name){
		this.id = id
		this.name = name
	}
}
UserPermission.prototype.tablename = tablename
module.exports = UserPermission
module.exports.tablename = tablename
