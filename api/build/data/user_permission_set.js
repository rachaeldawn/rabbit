var Data = require("../data");
/*
 * @property user_id: The id of the user this permission belongs to. Part 1 of composite key
 * @property perm_id: The id of the permission. Part 2 of composite key
 * @property perm: The true/false value for the user
 */
var tablename = 'user_permission_set';
var UserPermissionSet = (function () {
    function UserPermissionSet(user_id, perm_id, perm) {
        this.user_id = user_id;
        this.perm_id = perm_id;
        this.perm = perm;
        this.Update = Data.Update.bind(this.Update, this);
        this.Sync = Data.Sync.bind(this.Sync, this);
        this.Save = Data.Save.bind(this.Save, this);
        this.Delete = Data.Delete.bind(this.Delete, this);
    }
    return UserPermissionSet;
}());
UserPermissionSet.prototype.tablename = tablename;
UserPermissionSet.Delete = Data.Delete.bind(UserPermissionSet.Delete);
UserPermissionSet.Page = Data.Page.bind(UserPermissionSet.Page);
UserPermissionSet.List = Data.List.bind(UserPermissionSet.List);
UserPermissionSet.Save = Data.Save.bind(UserPermissionSet.Save);
UserPermissionSet.Sync = Data.Sync.bind(UserPermissionSet.Sync);
UserPermissionSet.Search = Data.Search.bind(UserPermissionSet.Search);
UserPermissionSet.Update = Data.Update.bind(UserPermissionSet.Update);
module.exports = UserPermissionSet;
module.exports.tablename = tablename;
//# sourceMappingURL=user_permission_set.js.map