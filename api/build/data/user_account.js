"use strict";
exports.__esModule = true;
var UserAccount = (function () {
    function UserAccount(id, username, email, is_active) {
        this.tablename = 'user_account';
        this.id = id;
        this.username = username;
        this.email = email;
        this.is_active = is_active;
    }
    return UserAccount;
}());
exports["default"] = UserAccount;
UserAccount.prototype.tablename = 'user_account';
