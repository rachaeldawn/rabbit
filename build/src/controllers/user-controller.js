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
    function RegisterUserAccount(username, password) {
        throw 'Not implemented';
    }
    exports.RegisterUserAccount = RegisterUserAccount;
    function FinishUserRegistration(user, token) {
        throw 'Not implemented';
    }
    exports.FinishUserRegistration = FinishUserRegistration;
    function ValidateActivationToken(userid, token) {
        throw 'Not implemented';
    }
    exports.ValidateActivationToken = ValidateActivationToken;
    function ActivateUser(userId) {
        throw 'Not implemented';
    }
    exports.ActivateUser = ActivateUser;
    function DeactivateUser(userId) {
        throw 'Not implemented';
    }
    exports.DeactivateUser = DeactivateUser;
    function GetUserStatus() {
        throw 'Not implemented';
    }
    exports.GetUserStatus = GetUserStatus;
    function CreateUser(userName, password) {
        throw 'Not implemented';
    }
    exports.CreateUser = CreateUser;
    function ResetPassword(newPassword, resetToken) {
        throw 'Not implemented';
    }
    exports.ResetPassword = ResetPassword;
    function GeneratePassword(password, algo) {
        throw 'Not implemented';
    }
    exports.GeneratePassword = GeneratePassword;
    function CacheUsers() {
        throw 'Not implemented';
    }
    exports.CacheUsers = CacheUsers;
    function AddUserToCache(user) {
        throw 'Not implemented';
    }
    exports.AddUserToCache = AddUserToCache;
    function RemoveUserFromCache(user) {
        throw 'Not implemented';
    }
    exports.RemoveUserFromCache = RemoveUserFromCache;
    function GetCachedUser(user) {
        throw 'Not implemented';
    }
    exports.GetCachedUser = GetCachedUser;
    function UpdateCachedUser(user) {
        throw 'Not implemented';
    }
    exports.UpdateCachedUser = UpdateCachedUser;
});
