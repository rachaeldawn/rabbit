/*
 * @property id: The id of this binding participant binding
 * @property taskboard_id: The id of the taskboard to be bound
 * @property user_id: The id of the user to be bound
 * @property can_write: A true/false on whether or not the user is able to write to the board
 * @property can_delete: A true/false on whether or not the user is able to delete on the board
 * @property can_invite: A true/false on whether or not the user is able to add others to the board. Note: User can not grant more permissions than they have.
 */
export default class TaskboardParticipant {
	constructor(id, taskboard_id, user_id, can_write, can_delete, can_invite){
	this.tablename = 'taskboard_participant'
		this.id = id
		this.taskboard_id = taskboard_id
		this.user_id = user_id
		this.can_write = can_write
		this.can_delete = can_delete
		this.can_invite = can_invite
	}
}

TaskboardParticipant.prototype.tablename = 'taskboard_participant'
