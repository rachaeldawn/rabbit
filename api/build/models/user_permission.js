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
    exports.tablename = 'user_permission';
    var UserPermission = (function () {
        function UserPermission(id, name) {
            this.id = id;
            this.name = name;
        }
        return UserPermission;
    }());
    exports["default"] = UserPermission;
});
