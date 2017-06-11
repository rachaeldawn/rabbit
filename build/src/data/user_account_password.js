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
});
