"use strict";
exports.__esModule = true;
var MessageReceipt = (function () {
    function MessageReceipt(message_id, recipient_id, received, read) {
        this.tablename = 'message_receipt';
        this.message_id = message_id;
        this.recipient_id = recipient_id;
        this.received = received;
        this.read = read;
    }
    return MessageReceipt;
}());
exports["default"] = MessageReceipt;
MessageReceipt.prototype.tablename = 'message_receipt';
