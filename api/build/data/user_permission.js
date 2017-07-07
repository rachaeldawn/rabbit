"use strict";
exports.__esModule = true;
var UserPermission = (function () {
    function UserPermission(id, name) {
        this.tablename = 'user_permission';
        this.id = id;
        this.name = name;
    }
    return UserPermission;
}());
exports["default"] = UserPermission;
UserPermission.prototype.tablename = 'user_permission';
