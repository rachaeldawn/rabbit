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
    /*
     * Exported Functions:
     * 	GetNotifications: Gets the notifications for the user
     * 	CreateNotification: Creates a notification for a user (if it can not be derived)
     * 	RemoveNotification: Removes a notification that has been viewed
     * 	CacheNotifications: Caches all notifications for performance sake by pulling all of them from the database, and finding the notifications that need to exist.
     * 	SetRead: Sets a notification (or notification set) as read
     * Private Functions:
     */
    /*
     * Purpose: Gets the notifications for the user
     * @param user: The id or user to get the notifications for (default: undefined)
     */
    function GetNotifications(user) {
        throw 'Not implemented';
    }
    exports.GetNotifications = GetNotifications;
    /*
     * Purpose: Creates a notification for a user (if it can not be derived)
     * @param user: The id or the user object to create the notification for (default: undefined)
     * @param origin: The origin of the notification (default: undefined)
     * @param message: The message to give to the user (default: undefined)
     */
    function CreateNotification(user, origin, message) {
        throw 'Not implemented';
    }
    exports.CreateNotification = CreateNotification;
    /*
     * Purpose: Removes a notification that has been viewed
     * @param notification: The notification to remove (default: undefined)
     * @param user: The id or user object requesting the removal (default: undefined)
     */
    function RemoveNotification(notification, user) {
        throw 'Not implemented';
    }
    exports.RemoveNotification = RemoveNotification;
    /*
     * Purpose: Caches all notifications for performance sake by pulling all of them from the database, and finding the notifications that need to exist.
     */
    function CacheNotifications() {
        throw 'Not implemented';
    }
    exports.CacheNotifications = CacheNotifications;
    /*
     * Purpose: Sets a notification (or notification set) as read
     * @param notification:  (default: undefined)
     * @param user: The id or user object setting the notification to read (default: undefined)
     */
    function SetRead(notification, user) {
        throw 'Not implemented';
    }
    exports.SetRead = SetRead;
});
