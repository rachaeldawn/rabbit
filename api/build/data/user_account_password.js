/*
 * @property id: Identifier matching a User Account Id. One-To-One relationship.
 * @property hash: Hash of the password
 * @property salt: Salt added to the original
 * @property iterations: The amount of times the hashing algo was ran.
 */
var tablename = 'user_account_password';
var UserAccountPassword = (function () {
    function UserAccountPassword(id, hash, salt, iterations) {
        this.id = id;
        this.hash = hash;
        this.salt = salt;
        this.iterations = iterations;
    }
    return UserAccountPassword;
}());
UserAccountPassword.prototype.tablename = tablename;
module.exports = UserAccountPassword;
module.exports.tablename = tablename;
//# sourceMappingURL=user_account_password.js.map