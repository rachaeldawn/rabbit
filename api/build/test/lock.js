var Locker = require("../controllers/lock");
describe('#Locker', function () {
    describe("LockObject", function () {
        it("undefined if user or target does not exist");
        it("Refuses if target does not have a tablename attribute");
        it("Undefined if obj does not have an id");
        it("Undefined if target tablename does not exist");
        it("Refuses if there is already a lock on the object");
        it("Locks object");
    });
    describe("UnlockObject", function () {
        it("Undefined if user or target does not exist");
        it("Undefined if obj does not have an id");
        it("Undefined if lock is not active");
        it("Refuses if user does not have force permission for locking or is not the locker");
        it("Undefined if target tablename does not exist");
        it("Unlocks target");
    });
    describe("IsLocked", function () {
        it("Undefined if obj does not exist");
        it("Undefined if obj does not have a tablename");
        it("Undefined if obj does not have an id");
        it("Returns whether or not there is a lock");
    });
    describe("ForceUnlock", function () {
        it("Undefined if User or target do not exist");
        it("Undefined if target lacks tablename or id");
        it("Undefined if there is no lock");
        it("Refuses if user does not have force permission on lock");
        it("Forcefully removes lock");
    });
    describe("GetUserLocked", function () {
        it("Undefined if target does not exist");
        it("Undefined if target does not have tablename or id");
        it("Undefined if target tablename does not exist");
        it("Returns id of user that holds the lock");
    });
});
