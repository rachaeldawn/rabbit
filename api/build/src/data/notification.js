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
     * @property id: The id of the notification object
     * @property user_id: The user id the notification belongs to
     * @property origin: A max 400 character long string indicating to the system where the notification came from
     * @property message: A max 400 character long string indicating what the notification is (shown to user)
     */
    exports.tablename = 'notification';
    var Notification = (function () {
        function Notification(id, user_id, origin, message) {
            this.id = id;
            this.user_id = user_id;
            this.origin = origin;
            this.message = message;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Notification;
    }());
    exports["default"] = Notification;
    Notification.Delete = Data.Delete.bind(Notification.Delete);
    Notification.prototype.tablename = exports.tablename;
    Notification.Page = Data.Page.bind(Notification.Page);
    Notification.List = Data.List.bind(Notification.List);
    Notification.Save = Data.Save.bind(Notification.Save);
    Notification.Sync = Data.Sync.bind(Notification.Sync);
    Notification.Search = Data.Search.bind(Notification.Search);
    Notification.Update = Data.Update.bind(Notification.Update);
});
