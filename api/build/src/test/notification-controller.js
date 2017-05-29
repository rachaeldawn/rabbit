var NotificationController = require("../controllers/notification-controller");
describe('#NotificationController', function () {
    describe('GetNotifications', function () {
        it('Gets notifications for user');
        it('Ignores nonexistent users');
        it('Gets notifications only for the user specified');
    });
    describe('CreateNotification', function () {
        it('Creates notification');
        it('Refuses a non-existent user id');
        it('Refuses if origin or message is null or empty');
        it('Caches notification');
    });
    describe('RemoveNotification', function () {
        it('Removes notification');
        it('Refuses if the notification does not belong to the user');
        it('Refuses if the user does not exist');
        it('Refuses if the notification does not exist');
    });
    describe('CacheNotifications', function () {
        it('Caches notifications');
    });
    describe('SetRead', function () {
        it('Rejects if the notification does not belong to the user');
        it('Rejects if the notification does not exist');
    });
});
