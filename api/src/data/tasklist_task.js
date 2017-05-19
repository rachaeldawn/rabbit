var Data = require("../data")
/*
 * @property id: The id of the task in the database
 * @property parent_task_id: Null if it is not nested with anything, or the Id of the task this entry is inside
 * @property is_complete: A true/false value on whether or not the task is complete
 * @property message: The message indicating what the todo is
 */
export const tablename = 'tasklist_task'
export default class TasklistTask {
	constructor(id, parent_task_id, is_complete, message){
		this.id = id
		this.parent_task_id = parent_task_id
		this.is_complete = is_complete
		this.message = message
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

TasklistTask.Delete     = Data.Delete.bind(TasklistTask.Delete)
TasklistTask.prototype.tablename = tablename
TasklistTask.Page       = Data.Page.bind(TasklistTask.Page)
TasklistTask.List       = Data.List.bind(TasklistTask.List)
TasklistTask.Save       = Data.Save.bind(TasklistTask.Save)
TasklistTask.Sync       = Data.Sync.bind(TasklistTask.Sync)
TasklistTask.Search     = Data.Search.bind(TasklistTask.Search)
TasklistTask.Update     = Data.Update.bind(TasklistTask.Update)
