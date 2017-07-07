var UserController = require("../../controllers/user");
var assert = require('assert');
var Data = require('../../data');
before('Initialize Data accessors', function (done) {
    Data.Initialize()
        .then(function () { return done(); });
});
describe('#UserController', function () {
    describe("RegisterUserAccount", function () {
        it('Rejects bad form email addresses', function () {
            assert.throws(function () { return UserController.RegisterUserAccount('\\22@l929292..cca', 'ausername', 'TestPassword1'); }, /Bad form(.*)email/, 'Did not throw bad form error about email address');
        });
        it('Rejects bad form usernames', function () {
            assert.throws(function () { return UserController.RegisterUserAccount('me@jonathanschmold.ca', ')(8736620o0+\';:', "TestPassword1"); }, /Bad form(.*)user/, 'Did not throw bad form error about usernames');
        });
        it('Breaks on missing params', function () {
            assert.throws(UserController.RegisterUserAccount, /Bad form/, "Did not throw a bad form error");
        });
        it('Returns a user id on valid registration', function (done) {
            UserController.RegisterUserAccount('test@gmail.com', 'test3223', 'TestPassword@3#11!')
                .then(function (user_id) {
                typeof user_id === typeof 1 && done();
                assert(user_id != null, 'There is something wrong');
            })["catch"](function (err) { return done(err); });
        });
    });
    describe("FinishUserRegistration", function () {
        it('Activates user account');
    });
    describe("ValidateActivationToken", function () {
        it('Validates correctly');
        it('Rejects invalid parameters');
        it('Rejects incorrect token');
    });
    describe("ActivateUser", function () {
        it('Properly activates a user');
        it('Refuses a non-existent user id');
        it('Ignores users that are already active');
        it('Refuses users that never finished registration');
    });
    describe("DeactivateUser", function () {
        it('Deactivates user');
        it('Ignores users that are already inactive');
        it('Refuses a non-existent user id');
    });
    describe("GetUserStatus", function () {
        it('gets proper status');
        it('ignores non-existent users');
    });
    describe("CreateUser", function () {
        it('Refuses bad-form username');
        it('Refuses passwords smaller than 8 characters');
        it('Uses hash algorithm');
    });
    describe("ResetPassword", function () {
        it('Password is reset');
    });
    describe("GeneratePassword", function () {
        it('Generates a hex password hash');
    });
    describe("CacheUsers", function () {
        it('Gets all users');
        it('Gets all password hashes');
        it('Categorizes users into Employees and Customers (if !employee then customer)');
    });
    describe("AddUserToCache", function () {
        it('Refuses a non-existent user id');
        it('Caches user');
    });
    describe("RemoveUserFromCache", function () {
        it('Removes user from cache');
    });
    describe("GetCachedUser", function () {
        it('Retrieves users that do exist');
    });
    describe("UpdateCachedUser", function () {
        it('Updates from database');
        it('Errors if user does not exist in database');
    });
    describe("GenerateActivationToken", function () {
    });
});
