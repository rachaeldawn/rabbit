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
    exports.tablename = 'user_account';
    var UserAccount = (function () {
        function UserAccount(id, username, is_active) {
            this.id = id;
            this.username = username;
            this.is_active = is_active;
        }
        return UserAccount;
    }());
    exports["default"] = UserAccount;
});
