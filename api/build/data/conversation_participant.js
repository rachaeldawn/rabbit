var Data = require("../data");
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
        this.Update = Data.Update.bind(this.Update, this);
        this.Sync = Data.Sync.bind(this.Sync, this);
        this.Save = Data.Save.bind(this.Save, this);
        this.Delete = Data.Delete.bind(this.Delete, this);
    }
    return ConversationParticipant;
}());
ConversationParticipant.prototype.tablename = tablename;
ConversationParticipant.Delete = Data.Delete.bind(ConversationParticipant.Delete);
ConversationParticipant.Page = Data.Page.bind(ConversationParticipant.Page);
ConversationParticipant.List = Data.List.bind(ConversationParticipant.List);
ConversationParticipant.Save = Data.Save.bind(ConversationParticipant.Save);
ConversationParticipant.Sync = Data.Sync.bind(ConversationParticipant.Sync);
ConversationParticipant.Search = Data.Search.bind(ConversationParticipant.Search);
ConversationParticipant.Update = Data.Update.bind(ConversationParticipant.Update);
module.exports = ConversationParticipant;
module.exports.tablename = tablename;
//# sourceMappingURL=conversation_participant.js.map