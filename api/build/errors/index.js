var WrongTypeError = function (actual, expected, name) {
    if (name === void 0) { name = null; }
    throw new Error("Invalid type " + actual + ", expected " + expected + " " + (name != null ? 'for ' + name : ''));
};
var IntOutOfBoundsError = function (value, min, max, name) {
    if (name === void 0) { name = null; }
    throw new Error("Value" + value + " " + (name != null ? ' for ' + name : '') + " is out of bounds. Min: " + min + ", Max: " + max);
};
var RequiredFieldError = function (name) {
    throw new Error("Required field " + name + " is undefined");
};
var StringTooLongError = function (name, max) {
    throw new Error("String " + name + " is too long. Max: " + max);
};
var UnregisteredModelError = function (obj) {
    throw new Error("Class '" + obj.constructor.name + "' is not registered.");
};
var InvalidModelError = function () {
    throw new Error("Object does not align with schema.");
};
var UnsavedObjectError = function () {
    throw new Error('Object was never saved.');
};
module.exports.WrongTypeError = WrongTypeError;
module.exports.IntOutOfBoundsError = IntOutOfBoundsError;
module.exports.RequiredFieldError = RequiredFieldError;
module.exports.StringTooLongError = StringTooLongError;
module.exports.UnregisteredModelError = UnregisteredModelError;
module.exports.InvalidModelError = InvalidModelError;
module.exports.UnsavedObjectError = UnsavedObjectError;
