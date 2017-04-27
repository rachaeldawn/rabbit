/*
 * @property id: The Id of the permission
 * @property name: A max 32 character long name of the permission. Eg: CREATE_INVOICE, READ_ALL_INVOICE, READ_OWNED_INVOICES
 */
class Permission {
	constructor(id, name){
		this.id = id
		this.name = name
	}
}
module.exports = Permission
module.exports.tableName = 'permission'
