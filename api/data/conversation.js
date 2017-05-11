/*
 * @property id: Identifier of a Conversation
 * @property creator_id: The Id matching a user_account table entry
 */
const tablename = 'conversation'
class Conversation {
	constructor(id, creator_id){
		this.id = id
		this.creator_id = creator_id
		this.tablename = 'conversation'
	}
}
Conversation.prototype.tablename = 'conversation'
module.exports = Conversation
module.exports.tablename = tablename
