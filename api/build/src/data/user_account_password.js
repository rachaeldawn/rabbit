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
     * @property id: Identifier matching a User Account Id. One-To-One relationship.
     * @property hash: Hash of the password
     * @property salt: Salt added to the original
     * @property iterations: The amount of times the hashing algo was ran.
     */
    exports.tablename = 'user_account_password';
    var UserAccountPassword = (function () {
        function UserAccountPassword(id, hash, salt, iterations) {
            this.id = id;
            this.hash = hash;
            this.salt = salt;
            this.iterations = iterations;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return UserAccountPassword;
    }());
    exports["default"] = UserAccountPassword;
    UserAccountPassword.Delete = Data.Delete.bind(UserAccountPassword.Delete);
    UserAccountPassword.prototype.tablename = exports.tablename;
    UserAccountPassword.Page = Data.Page.bind(UserAccountPassword.Page);
    UserAccountPassword.List = Data.List.bind(UserAccountPassword.List);
    UserAccountPassword.Save = Data.Save.bind(UserAccountPassword.Save);
    UserAccountPassword.Sync = Data.Sync.bind(UserAccountPassword.Sync);
    UserAccountPassword.Search = Data.Search.bind(UserAccountPassword.Search);
    UserAccountPassword.Update = Data.Update.bind(UserAccountPassword.Update);
});
