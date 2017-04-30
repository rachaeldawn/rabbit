/*
 * @property id: The id of the task in the database
 * @property parent_task_id: Null if it is not nested with anything, or the Id of the task this entry is inside
 * @property is_complete: A true/false value on whether or not the task is complete
 * @property message: The message indicating what the todo is
 */
class TasklistTask {
	constructor(id, parent_task_id, is_complete, message){
		this.id = id
		this.parent_task_id = parent_task_id
		this.is_complete = is_complete
		this.message = message
	}
}
module.exports = TasklistTask
module.exports.tableName = 'tasklist_task'
