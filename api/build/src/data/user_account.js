(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Data = require("../data");
    /*
     * @property id: Identifier of a User Account
     * @property username: What a user will use to log into the system
     * @property is_active: Indicator of whether or not a user account is active
     */
    exports.tablename = 'user_account';
    var UserAccount = (function () {
        function UserAccount(id, username, is_active) {
            this.id = id;
            this.username = username;
            this.is_active = is_active;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return UserAccount;
    }());
    exports["default"] = UserAccount;
    UserAccount.Delete = Data.Delete.bind(UserAccount.Delete);
    UserAccount.prototype.tablename = exports.tablename;
    UserAccount.Page = Data.Page.bind(UserAccount.Page);
    UserAccount.List = Data.List.bind(UserAccount.List);
    UserAccount.Save = Data.Save.bind(UserAccount.Save);
    UserAccount.Sync = Data.Sync.bind(UserAccount.Sync);
    UserAccount.Search = Data.Search.bind(UserAccount.Search);
    UserAccount.Update = Data.Update.bind(UserAccount.Update);
});
