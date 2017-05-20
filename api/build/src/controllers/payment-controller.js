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
    /*
     * Exported Functions:
     * 	ReceivePayment: Process payments by taking the id of a token, verifying it is a valid token, then processing a payment of amount amt.
     * 	ValidateToken: Easier validation of tokens to make testing easier.
     * 	Refund: Refund a payment to a customer
     * 	Adjust: Adjust a previously made payment (refund, and makepayment, or just a refund if is less)
     * 	CheckForEvents: Check for new events from Stripe
     * 	GetBalance: Returns the balance that stripe owes us thus far
     * Private Functions:
     */
    /*
     * Purpose: Process payments by taking the id of a token, verifying it is a valid token, then processing a payment of amount amt.
     * @param tokenId: The stripe token (default: undefined)
     * @param amt: The amount of the payment (default: undefined)
     * @param description: The reason or description for/of the payment (default: undefined)
     * @param save: Whether or not the card details should be saved through Stripe for future re-use. (default: false)
     */
    function ReceivePayment(tokenId, amt, description, save) {
        if (save === void 0) { save = false; }
        throw 'Not implemented';
    }
    exports.ReceivePayment = ReceivePayment;
    /*
     * Purpose: Easier validation of tokens to make testing easier.
     * @param tokenId: The stripe token id (default: undefined)
     */
    function ValidateToken(tokenId) {
        throw 'Not implemented';
    }
    exports.ValidateToken = ValidateToken;
    /*
     * Purpose: Refund a payment to a customer
     * @param transaction: A charge object (default: undefined)
     * @param amount: Amount to refund. -1 means full amount (default: -1)
     */
    function Refund(transaction, amount) {
        if (amount === void 0) { amount = -1; }
        throw 'Not implemented';
    }
    exports.Refund = Refund;
    /*
     * Purpose: Adjust a previously made payment (refund, and makepayment, or just a refund if is less)
     * @param transaction: Positive or negative decimal (default: undefined)
     * @param amount: Positive or negative decimal (default: undefined)
     */
    function Adjust(transaction, amount) {
        throw 'Not implemented';
    }
    exports.Adjust = Adjust;
    /*
     * Purpose: Check for new events from Stripe
     */
    function CheckForEvents() {
        throw 'Not implemented';
    }
    exports.CheckForEvents = CheckForEvents;
    /*
     * Purpose: Returns the balance that stripe owes us thus far
     */
    function GetBalance() {
        throw 'Not implemented';
    }
    exports.GetBalance = GetBalance;
});
