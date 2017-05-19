import {default as User} from "../data/user_account"
import {default as Permission} from "../data/user_permission"
import {default as PermissionSet} from "../data/user_permission_set"


/*
 * Exported Functions: 
 * 	GivePermission: Give a user a permission, checking first if the user giving the permission is allowed.
 * 	RevokePermission: Revokes a permisison off of a user, checking first if the revoker is allowed to revoke permission
 * 	HasPermission: Checks if the user has a permission
 * 	CachePermissionSet: To cache a user's permission set. Used to increase permission checking performance.
 * 	DeleteFromCache: Deletes a user's permissions from cache after a period of time
 * Private Functions: 
 */
/*
 * Purpose: Give a user a permission, checking first if the user giving the permission is allowed.
 * @param userId: The userId or User object to have the permission set on (default: undefined)
 * @param permissionId: The id, or object, of the permission to be set on the user (default: undefined)
 * @param giverId: The userId or User object providing the permission (default: undefined)
 */
export function GivePermission(userId: number|User, permissionId: number|Permission, giverId: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Revokes a permisison off of a user, checking first if the revoker is allowed to revoke permission
 * @param revokeee: The id or user object to have the permission revoked from (default: undefined)
 * @param permission: The id or object of the permission to be provided (default: undefined)
 * @param revoker: The id or the object of the user revoking the permission (default: undefined)
 */
export function RevokePermission(revokeee: number|User, permission: number|Permission, revoker: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Checks if the user has a permission
 * @param user: User id or the user object to be checked (default: undefined)
 * @param permission: The permission to be checked (default: undefined)
 */
export function HasPermission(user: number|User, permission: number|Permission) {
	throw 'Not implemented'
}
/*
 * Purpose: To cache a user's permission set. Used to increase permission checking performance.
 * @param user: The user or id of the user to have their permissions cached (default: undefined)
 */
export function CachePermissionSet(user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes a user's permissions from cache after a period of time
 * @param user: The id or User object to remove the permissions from (default: undefined)
 */
export function DeleteFromCache(user: number|User) {
	throw 'Not implemented'
}


