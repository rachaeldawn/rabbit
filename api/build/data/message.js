/*
 * @property id: Identifier of a single message
 * @property conversation_id: Id of the conversation this message is in.
 * @property sender_id: The user_account id of the person who sent the message
 * @property message: The message (max 2400 characters)
 */
var tablename = 'message';
var Message = (function () {
    function Message(id, conversation_id, sender_id, message) {
        this.id = id;
        this.conversation_id = conversation_id;
        this.sender_id = sender_id;
        this.message = message;
    }
    return Message;
}());
Message.prototype.tablename = tablename;
module.exports = Message;
module.exports.tablename = tablename;
//# sourceMappingURL=message.js.map