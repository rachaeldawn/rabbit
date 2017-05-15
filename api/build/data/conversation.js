/*
 * @property id: Identifier of a Conversation
 * @property creator_id: The Id matching a user_account table entry
 */
var tablename = 'conversation';
var Conversation = (function () {
    function Conversation(id, creator_id) {
        this.id = id;
        this.creator_id = creator_id;
    }
    return Conversation;
}());
Conversation.prototype.tablename = tablename;
module.exports = Conversation;
module.exports.tablename = tablename;
//# sourceMappingURL=conversation.js.map