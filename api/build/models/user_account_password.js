"use strict";
exports.__esModule = true;
exports.tablename = 'user_account_password';
var UserAccountPassword = (function () {
    function UserAccountPassword(id, hash, salt, iterations) {
        this.id = id;
        this.hash = hash;
        this.salt = salt;
        this.iterations = iterations;
    }
    return UserAccountPassword;
}());
exports["default"] = UserAccountPassword;
