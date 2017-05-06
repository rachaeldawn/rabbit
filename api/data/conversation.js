/*
 * @property id: Identifier of a Conversation
 * @property creator_id: The Id matching a user_account table entry
 */
class Conversation {
	constructor(id, creator_id){
		this.id = id
		this.creator_id = creator_id
		this.tablename = 'conversation'
	}
}
module.exports = Conversation
