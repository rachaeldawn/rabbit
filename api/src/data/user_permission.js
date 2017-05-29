var Data = require("../data")
/*
 * @property id: The Id of the permission
 * @property name: A max 32 character long name of the permission. Eg: CREATE_INVOICE, READ_ALL_INVOICE, READ_OWNED_INVOICES
 */
export const tablename = 'user_permission'
export default class UserPermission {
	constructor(id, name){
		this.id = id
		this.name = name
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

UserPermission.Delete     = Data.Delete.bind(UserPermission.Delete)
UserPermission.prototype.tablename = tablename
UserPermission.Page       = Data.Page.bind(UserPermission.Page)
UserPermission.List       = Data.List.bind(UserPermission.List)
UserPermission.Save       = Data.Save.bind(UserPermission.Save)
UserPermission.Sync       = Data.Sync.bind(UserPermission.Sync)
UserPermission.Search     = Data.Search.bind(UserPermission.Search)
UserPermission.Update     = Data.Update.bind(UserPermission.Update)