(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
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
    function GivePermission(userId, permissionId, giverId) {
        throw 'Not implemented';
    }
    exports.GivePermission = GivePermission;
    /*
     * Purpose: Revokes a permisison off of a user, checking first if the revoker is allowed to revoke permission
     * @param revokeee: The id or user object to have the permission revoked from (default: undefined)
     * @param permission: The id or object of the permission to be provided (default: undefined)
     * @param revoker: The id or the object of the user revoking the permission (default: undefined)
     */
    function RevokePermission(revokeee, permission, revoker) {
        throw 'Not implemented';
    }
    exports.RevokePermission = RevokePermission;
    /*
     * Purpose: Checks if the user has a permission
     * @param user: User id or the user object to be checked (default: undefined)
     * @param permission: The permission to be checked (default: undefined)
     */
    function HasPermission(user, permission) {
        throw 'Not implemented';
    }
    exports.HasPermission = HasPermission;
    /*
     * Purpose: To cache a user's permission set. Used to increase permission checking performance.
     * @param user: The user or id of the user to have their permissions cached (default: undefined)
     */
    function CachePermissionSet(user) {
        throw 'Not implemented';
    }
    exports.CachePermissionSet = CachePermissionSet;
    /*
     * Purpose: Deletes a user's permissions from cache after a period of time
     * @param user: The id or User object to remove the permissions from (default: undefined)
     */
    function DeleteFromCache(user) {
        throw 'Not implemented';
    }
    exports.DeleteFromCache = DeleteFromCache;
});
