/*
 * @property id: Identifier matching a User Account Id. One-To-One relationship.
 * @property hash: Hash of the password
 * @property salt: Salt added to the original
 * @property iterations: The amount of times the hashing algo was ran.
 */
export default class UserAccountPassword {
	constructor(id, hash, salt, iterations){
	this.tablename = 'user_account_password'
		this.id = id
		this.hash = hash
		this.salt = salt
		this.iterations = iterations
	}
}

UserAccountPassword.prototype.tablename = 'user_account_password'
