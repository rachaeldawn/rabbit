/*
 * @property id: Identifier of a User Account
 * @property username: What a user will use to log into the system
 * @property is_active: Indicator of whether or not a user account is active
 */
var tablename = 'user_account';
var UserAccount = (function () {
    function UserAccount(id, username, is_active) {
        this.id = id;
        this.username = username;
        this.is_active = is_active;
    }
    return UserAccount;
}());
UserAccount.prototype.tablename = tablename;
module.exports = UserAccount;
module.exports.tablename = tablename;
//# sourceMappingURL=user_account.js.map