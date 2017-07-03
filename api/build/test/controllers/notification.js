var NotificationController = require("../../controllers/notification");
describe('#NotificationController', function () {
    describe("GetNotifications", function () {
        it('Gets notifications for user');
        it('Ignores nonexistent users');
        it('Gets notifications only for the user specified');
    });
    describe("CreateNotification", function () {
        it('Creates notification');
        it('Undefined if user does not exist');
        it('Refuses if origin or message is null or empty');
        it('Caches notification');
    });
    describe("RemoveNotification", function () {
        it('Removes notification');
        it('Refuses if the notification does not belong to the user');
        it('Undefined if the user does not exist');
        it('Undefined if the notification does not exist');
    });
    describe("CacheNotifications", function () {
        it('Caches notifications');
    });
    describe("SetRead", function () {
        it('Rejects if the notification does not belong to the user');
        it('Undefined if the notification does not exist');
    });
    describe("SetUnread", function () {
        it('Rejects if the notification does not belong to the user');
        it('Undefined if the user does not exist');
        it('Undefined if the notification does not exist');
    });
    describe("SetNotificationStatus", function () {
        it('Rejects if the notification does not belong to the user');
        it('Undefined if notification does not exist');
        it('Undefined if the user does not exist');
    });
});
