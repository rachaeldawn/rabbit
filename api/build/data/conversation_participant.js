"use strict";
exports.__esModule = true;
var ConversationParticipant = (function () {
    function ConversationParticipant(id, user_id, conversation_id) {
        this.tablename = 'conversation_participant';
        this.id = id;
        this.user_id = user_id;
        this.conversation_id = conversation_id;
    }
    return ConversationParticipant;
}());
exports["default"] = ConversationParticipant;
ConversationParticipant.prototype.tablename = 'conversation_participant';
