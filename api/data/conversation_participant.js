/*
 * @property id: Identifier of a single participant within a conversation
 * @property user_id: Id matching a single user_account table value
 * @property conversation_id: Id matching a single conversation table value
 */
const tablename = 'conversation_participant'
class ConversationParticipant {
	constructor(id, user_id, conversation_id){
		this.id = id
		this.user_id = user_id
		this.conversation_id = conversation_id
		this.tablename = 'conversation_participant'
	}
}
ConversationParticipant.prototype.tablename = 'conversation_participant'
module.exports = ConversationParticipant
module.exports.tablename = tablename
