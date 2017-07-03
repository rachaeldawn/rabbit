"use strict";
exports.__esModule = true;
var crypto = require("crypto");
var user_account_1 = require("../data/user_account");
var user_account_password_1 = require("../data/user_account_password");
var Data = require("../data");
var Validator = require("validator");
var Errors = require("../errors/controllers/user");
var UserCache = {};
function RegisterUserAccount(email, username, password) {
    var validUsername = /[(a-zA-Z0-9_)]+/;
    username = username.toLowerCase();
    validator.isEmail(email) && Errors.BadFormEmailError(email);
    username.length > 140 || validUsername.exec(username) && Errors.BadFormUsernameError(username);
    password.length < 8 || password.length > 120 && Errors.BadPasswordLength();
    return CreateUser(email, username, password)
        .then(GenerateActivationToken)
        .then(SendActivationEmail);
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
function GetUserStatus(user) {
    throw 'Not implemented';
}
exports.GetUserStatus = GetUserStatus;
function CreateUser(emailaddr, userName, password) {
    return new Promise(function (resolve, reject) {
        Validator.normalizeEmail(emailaddr, { lowercase: true });
        LookupUser({ email: emailaddr, username: userName })
            .then(function () { return reject('User already exists'); })["catch"](function () {
            var newUser = new user_account_1["default"](-1, userName, emailaddr, false);
            Data.Save(newUser)
                .then(function (userObj) { return GeneratePassword(password, userObj, crypto.pbkdf2); })
                .then(function () { return resolve(); })["catch"](function () { return reject('Unable to create user'); });
        });
    });
}
exports.CreateUser = CreateUser;
function ResetPassword(newPassword, resetToken) {
    throw 'Not implemented';
}
exports.ResetPassword = ResetPassword;
function GeneratePassword(password, user, algo) {
    return new Promise(function (resolve, reject) {
        var salt = crypto.randomBytes(32);
        algo(password, salt, 150000, 512, 'sha512', function (err, derivedKey) {
            err && reject(err);
            var id = (typeof user === typeof new user_account_1["default"]()) ? user.id : user;
            Data.Save(new user_account_password_1["default"](id, derivedKey, salt, 150000))
                .then(function () { return resolve(id); })["catch"](function (err) { return reject(err); });
        });
    });
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
function GenerateActivationToken(user) {
    return new Promise(function (resolve, reject) {
        resolve(user);
    });
}
exports.GenerateActivationToken = GenerateActivationToken;
function SendActivationEmail(user) {
    return new Promise(function (resolve, reject) {
        resolve(true);
    });
}
exports.SendActivationEmail = SendActivationEmail;
function LookupUser(obj) {
    return new Promise(function (resolve, reject) {
        obj.tablename = 'user_account';
        var myarr = [];
        Data.Search(obj, 1)
            .then(function (results) {
            if (results == undefined || results.length < 1)
                reject("User not found");
            resolve(results[0]);
        });
    });
}
exports.LookupUser = LookupUser;
