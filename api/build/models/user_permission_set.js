"use strict";
exports.__esModule = true;
exports.tablename = 'user_permission_set';
var UserPermissionSet = (function () {
    function UserPermissionSet(user_id, perm_id, perm) {
        this.user_id = user_id;
        this.perm_id = perm_id;
        this.perm = perm;
    }
    return UserPermissionSet;
}());
exports["default"] = UserPermissionSet;
