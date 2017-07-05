"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var BadFormError = (function (_super) {
    __extends(BadFormError, _super);
    function BadFormError(msg) {
        return _super.call(this, 'Bad form: ' + msg) || this;
    }
    return BadFormError;
}(Error));
function BadFormEmailError(email) {
    throw new BadFormError("Email " + email + " is not a valid email");
}
exports.BadFormEmailError = BadFormEmailError;
function BadFormUsernameError(username) {
    throw new BadFormError("Username: " + username + " is not a valid username");
}
exports.BadFormUsernameError = BadFormUsernameError;
function BadPasswordLength() {
    throw new BadFormError("Password either too short or too long. 8 < password < 140.");
}
exports.BadPasswordLength = BadPasswordLength;
