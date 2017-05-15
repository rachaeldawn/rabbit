/*
 * @property id: Identifier of a single participant within a conversation
 * @property user_id: Id matching a single user_account table value
 * @property conversation_id: Id matching a single conversation table value
 */
var tablename = 'conversation_participant';
var ConversationParticipant = (function () {
    function ConversationParticipant(id, user_id, conversation_id) {
        this.id = id;
        this.user_id = user_id;
        this.conversation_id = conversation_id;
    }
    return ConversationParticipant;
}());
ConversationParticipant.prototype.tablename = tablename;
module.exports = ConversationParticipant;
module.exports.tablename = tablename;
//# sourceMappingURL=conversation_participant.js.map