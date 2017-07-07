/*
 * @property id: Identifier of a User Account
 * @property username: What a user will use to log into the system
 * @property email: The email address of the user
 * @property is_active: Indicator of whether or not a user account is active
 */
export default class UserAccount {
	constructor(id, username, email, is_active){
	this.tablename = 'user_account'
		this.id = id
		this.username = username
		this.email = email
		this.is_active = is_active
	}
}

UserAccount.prototype.tablename = 'user_account'
