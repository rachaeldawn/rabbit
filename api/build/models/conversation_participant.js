"use strict";
exports.__esModule = true;
exports.tablename = 'conversation_participant';
var ConversationParticipant = (function () {
    function ConversationParticipant(id, user_id, conversation_id) {
        this.id = id;
        this.user_id = user_id;
        this.conversation_id = conversation_id;
    }
    return ConversationParticipant;
}());
exports["default"] = ConversationParticipant;
