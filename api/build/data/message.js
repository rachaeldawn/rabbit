"use strict";
exports.__esModule = true;
var Message = (function () {
    function Message(id, conversation_id, sender_id, message) {
        this.tablename = 'message';
        this.id = id;
        this.conversation_id = conversation_id;
        this.sender_id = sender_id;
        this.message = message;
    }
    return Message;
}());
exports["default"] = Message;
Message.prototype.tablename = 'message';
