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
    exports.tablename = 'notification';
    var Notification = (function () {
        function Notification(id, user_id, origin, message) {
            this.id = id;
            this.user_id = user_id;
            this.origin = origin;
            this.message = message;
        }
        return Notification;
    }());
    exports["default"] = Notification;
});
