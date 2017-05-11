/*
 * @property id: Identifier of a User Account
 * @property username: What a user will use to log into the system
 * @property is_active: Indicator of whether or not a user account is active
 */
const tablename = 'user_account'
class UserAccount {
	constructor(id, username, is_active){
		this.id = id
		this.username = username
		this.is_active = is_active
		this.tablename = 'user_account'
	}
}
UserAccount.prototype.tablename = 'user_account'
module.exports = UserAccount
module.exports.tablename = tablename
