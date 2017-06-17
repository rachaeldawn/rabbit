"use strict";
exports.__esModule = true;
function Authorize(persistentToken, transientToken) {
    throw 'Not implemented';
}
exports.Authorize = Authorize;
function Login(username, password, token) {
    throw 'Not implemented';
}
exports.Login = Login;
function Logout(persistentToken, transientToken) {
    throw 'Not implemented';
}
exports.Logout = Logout;
function GenerateToken() {
    throw 'Not implemented';
}
exports.GenerateToken = GenerateToken;
function CachePersistentToken(token, user) {
    throw 'Not implemented';
}
exports.CachePersistentToken = CachePersistentToken;
function CacheTransientToken(token, persistentToken) {
    throw 'Not implemented';
}
exports.CacheTransientToken = CacheTransientToken;
function CacheCSRFToken(token, ip) {
    throw 'Not implemented';
}
exports.CacheCSRFToken = CacheCSRFToken;
function ValidateAuthTokens(transient, persistent) {
    throw 'Not implemented';
}
exports.ValidateAuthTokens = ValidateAuthTokens;
function ValidateCSRFToken(token, ip) {
    throw 'Not implemented';
}
exports.ValidateCSRFToken = ValidateCSRFToken;
