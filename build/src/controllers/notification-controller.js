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
    function GetNotifications(user) {
        throw 'Not implemented';
    }
    exports.GetNotifications = GetNotifications;
    function CreateNotification(user, origin, message) {
        throw 'Not implemented';
    }
    exports.CreateNotification = CreateNotification;
    function RemoveNotification(notification, user) {
        throw 'Not implemented';
    }
    exports.RemoveNotification = RemoveNotification;
    function CacheNotifications() {
        throw 'Not implemented';
    }
    exports.CacheNotifications = CacheNotifications;
    function SetRead(notification, user) {
        throw 'Not implemented';
    }
    exports.SetRead = SetRead;
});
