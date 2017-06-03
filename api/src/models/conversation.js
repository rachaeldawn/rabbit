/*
 * @property id: Identifier of a Conversation
 * @property creator_id: The Id matching a user_account table entry
 */
export const tablename = 'conversation'
export default class Conversation {
	constructor(id, creator_id){
		this.id = id
		this.creator_id = creator_id
	}
}
