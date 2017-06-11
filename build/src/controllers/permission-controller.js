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
    function CreatePermission(name) {
        throw 'Not implemented';
    }
    exports.CreatePermission = CreatePermission;
    function GrantPermission(userId, permissionId, giverId) {
        throw 'Not implemented';
    }
    exports.GrantPermission = GrantPermission;
    function RevokePermission(revokeee, permission, revoker) {
        throw 'Not implemented';
    }
    exports.RevokePermission = RevokePermission;
    function HasPermission(user, permission) {
        throw 'Not implemented';
    }
    exports.HasPermission = HasPermission;
    function CachePermissionSet(user) {
        throw 'Not implemented';
    }
    exports.CachePermissionSet = CachePermissionSet;
    function DeleteFromCache(user) {
        throw 'Not implemented';
    }
    exports.DeleteFromCache = DeleteFromCache;
});
