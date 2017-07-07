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
    username == undefined && Errors.BadFormUsernameError(username);
    email == undefined && Errors.BadFormEmailError(email);
    password == undefined && Errors.BadPasswordLength();
    var validUsername = /^[(a-zA-Z0-9_)]+$/;
    username = username.toLowerCase();
    !Validator.isEmail(email) && Errors.BadFormEmailError(email);
    username.length > 140 || !validUsername.exec(username) && Errors.BadFormUsernameError(username);
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
    return LookupUser({ id: userId })
        .then(function (user) {
    })["catch"](function (err) { return console.error(err); });
}
exports.ActivateUser = ActivateUser;
function DeactivateUser(userId) {
    throw 'Not implemented';
}
exports.DeactivateUser = DeactivateUser;
function GetUserStatus(user) {
    return new Promise(function (resolve, reject) {
        user = typeof (user) === typeof (new user_account_1["default"]()) ? user : new user_account_1["default"](user);
        Data.Sync(user)
            .then(function (res) {
            return res.is_active;
        });
    });
}
exports.GetUserStatus = GetUserStatus;
function CreateUser(emailaddr, userName, password) {
    return new Promise(function (resolve, reject) {
        Validator.normalizeEmail(emailaddr, { lowercase: true });
        LookupUser({ email: emailaddr, username: userName })
            .then(function () { return reject('User already exists'); })["catch"](function () {
            var usr = new user_account_1["default"](-1, userName, emailaddr, false);
            console.log('Is user active?' + usr.is_active);
            return Data.Save(usr)
                .then(function (userObj) { return GeneratePassword(password, userObj, crypto.pbkdf2); })
                .then(Data.Save)
                .then(function (res) { return res.rows[0].id; })["catch"](function (err) { return reject('Unable to create user. Reason: ' + err); });
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
            resolve(derivedKey.toString('hex'));
            var id = (typeof user === typeof new user_account_1["default"]()) ? user.id : user;
            resolve(new user_account_password_1["default"](id, derivedKey, salt, 150000));
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
        reject('Not implemented uet');
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
    return Data.Search(obj, 1)
        .then(function (results) { return results[0]; });
}
exports.LookupUser = LookupUser;
