"use strict";
exports.__esModule = true;
exports.tablename = 'user_account';
var UserAccount = (function () {
    function UserAccount(id, username, email, is_active) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.is_active = is_active;
    }
    return UserAccount;
}());
exports["default"] = UserAccount;
