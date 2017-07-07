"use strict";
exports.__esModule = true;
var UserAccountPassword = (function () {
    function UserAccountPassword(id, hash, salt, iterations) {
        this.tablename = 'user_account_password';
        this.id = id;
        this.hash = hash;
        this.salt = salt;
        this.iterations = iterations;
    }
    return UserAccountPassword;
}());
exports["default"] = UserAccountPassword;
UserAccountPassword.prototype.tablename = 'user_account_password';
