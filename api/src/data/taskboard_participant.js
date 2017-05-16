var Data = require("../data")
/*
 * @property id: The id of this binding participant binding
 * @property taskboard_id: The id of the taskboard to be bound
 * @property user_id: The id of the user to be bound
 * @property can_write: A true/false on whether or not the user is able to write to the board
 * @property can_delete: A true/false on whether or not the user is able to delete on the board
 * @property can_invite: A true/false on whether or not the user is able to add others to the board. Note: User can not grant more permissions than they have.
 */
const tablename = 'taskboard_participant'
class TaskboardParticipant {
	constructor(id, taskboard_id, user_id, can_write, can_delete, can_invite){
		this.id = id
		this.taskboard_id = taskboard_id
		this.user_id = user_id
		this.can_write = can_write
		this.can_delete = can_delete
		this.can_invite = can_invite
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

TaskboardParticipant.prototype.tablename = tablename
TaskboardParticipant.Delete = Data.Delete.bind(TaskboardParticipant.Delete)
TaskboardParticipant.Page = Data.Page.bind(TaskboardParticipant.Page)
TaskboardParticipant.List = Data.List.bind(TaskboardParticipant.List)
TaskboardParticipant.Save = Data.Save.bind(TaskboardParticipant.Save)
TaskboardParticipant.Sync = Data.Sync.bind(TaskboardParticipant.Sync)
TaskboardParticipant.Search = Data.Search.bind(TaskboardParticipant.Search)
TaskboardParticipant.Update = Data.Update.bind(TaskboardParticipant.Update)
module.exports = TaskboardParticipant
module.exports.tablename = tablename
