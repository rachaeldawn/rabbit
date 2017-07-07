"use strict";
exports.__esModule = true;
var UserPermissionSet = (function () {
    function UserPermissionSet(user_id, perm_id, perm) {
        this.tablename = 'user_permission_set';
        this.user_id = user_id;
        this.perm_id = perm_id;
        this.perm = perm;
    }
    return UserPermissionSet;
}());
exports["default"] = UserPermissionSet;
UserPermissionSet.prototype.tablename = 'user_permission_set';
