"use strict";
exports.__esModule = true;
var Notification = (function () {
    function Notification(id, user_id, origin, message) {
        this.tablename = 'notification';
        this.id = id;
        this.user_id = user_id;
        this.origin = origin;
        this.message = message;
    }
    return Notification;
}());
exports["default"] = Notification;
Notification.prototype.tablename = 'notification';
