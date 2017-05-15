/*
 * @property id: Identifier of a single message
 * @property conversation_id: Id of the conversation this message is in.
 * @property sender_id: The user_account id of the person who sent the message
 * @property message: The message (max 2400 characters)
 */
const tablename = 'message'
class Message {
	constructor(id, conversation_id, sender_id, message){
		this.id = id
		this.conversation_id = conversation_id
		this.sender_id = sender_id
		this.message = message
	}
}
Message.prototype.tablename = tablename
module.exports = Message
module.exports.tablename = tablename
