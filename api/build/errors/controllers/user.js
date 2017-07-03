"use strict";
exports.__esModule = true;
function BadFormEmailError(email) {
    throw new Error("Email " + email + " is not a valid email");
}
exports.BadFormEmailError = BadFormEmailError;
function BadFormUsernameError(username) {
    throw new Error("Username: " + username + " is not a valid username");
}
exports.BadFormUsernameError = BadFormUsernameError;
function BadPasswordLength() {
    throw new Error("Password either too short or too long. 8 < password < 140.");
}
exports.BadPasswordLength = BadPasswordLength;
