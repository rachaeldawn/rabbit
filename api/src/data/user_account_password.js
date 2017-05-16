var Data = require("../data")
/*
 * @property id: Identifier matching a User Account Id. One-To-One relationship.
 * @property hash: Hash of the password
 * @property salt: Salt added to the original
 * @property iterations: The amount of times the hashing algo was ran.
 */
const tablename = 'user_account_password'
class UserAccountPassword {
	constructor(id, hash, salt, iterations){
		this.id = id
		this.hash = hash
		this.salt = salt
		this.iterations = iterations
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

UserAccountPassword.prototype.tablename = tablename
UserAccountPassword.Delete = Data.Delete.bind(UserAccountPassword.Delete)
UserAccountPassword.Page = Data.Page.bind(UserAccountPassword.Page)
UserAccountPassword.List = Data.List.bind(UserAccountPassword.List)
UserAccountPassword.Save = Data.Save.bind(UserAccountPassword.Save)
UserAccountPassword.Sync = Data.Sync.bind(UserAccountPassword.Sync)
UserAccountPassword.Search = Data.Search.bind(UserAccountPassword.Search)
UserAccountPassword.Update = Data.Update.bind(UserAccountPassword.Update)
module.exports = UserAccountPassword
module.exports.tablename = tablename
