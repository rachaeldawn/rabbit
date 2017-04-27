/*
 * @property user_id: The id of the user this permission belongs to. Part 1 of composite key
 * @property perm_id: The id of the permission. Part 2 of composite key 
 * @property perm: The true/false value for the user
 */
class UserPermission {
	constructor(user_id, perm_id, perm){
		this.user_id = user_id
		this.perm_id = perm_id
		this.perm = perm
	}
}
module.exports = UserPermission
module.exports.tableName = 'user_permission'