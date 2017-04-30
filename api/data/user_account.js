/*
 * @property id: Identifier of a User Account
 * @property username: What a user will use to log into the system
 * @property is_active: Indicator of whether or not a user account is active
 */
class UserAccount {
	constructor(id, username, is_active){
		this.id = id
		this.username = username
		this.is_active = is_active
	}
}
module.exports = UserAccount
module.exports.tableName = 'user_account'
