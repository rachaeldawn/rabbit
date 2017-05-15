/*
 * @property id: The Id of the permission
 * @property name: A max 32 character long name of the permission. Eg: CREATE_INVOICE, READ_ALL_INVOICE, READ_OWNED_INVOICES
 */
var tablename = 'user_permission';
var UserPermission = (function () {
    function UserPermission(id, name) {
        this.id = id;
        this.name = name;
    }
    return UserPermission;
}());
UserPermission.prototype.tablename = tablename;
module.exports = UserPermission;
module.exports.tablename = tablename;
//# sourceMappingURL=user_permission.js.map