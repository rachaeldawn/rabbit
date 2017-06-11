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
    function ReceivePayment(tokenId, amt, description, save) {
        throw 'Not implemented';
    }
    exports.ReceivePayment = ReceivePayment;
    function ValidateToken(tokenId) {
        throw 'Not implemented';
    }
    exports.ValidateToken = ValidateToken;
    function Refund(transaction, amount) {
        if (amount === void 0) { amount = -1; }
        throw 'Not implemented';
    }
    exports.Refund = Refund;
    function Adjust(transaction, amount) {
        throw 'Not implemented';
    }
    exports.Adjust = Adjust;
    function CheckForEvents() {
        throw 'Not implemented';
    }
    exports.CheckForEvents = CheckForEvents;
    function GetBalance() {
        throw 'Not implemented';
    }
    exports.GetBalance = GetBalance;
});
