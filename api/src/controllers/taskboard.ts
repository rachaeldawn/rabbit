import {default as User} from "../data/user_account"
import Taskboard from "../data/taskboard"
import {default as Participant} from "../data/taskboard_participant"
import Tasklist from "../data/tasklist"
import {default as Task} from "../data/tasklist_task"
import * as PermissionController from "./permission-controller"


/*
 * Exported Functions: 
 * 	CreateTaskboard: Creates a taskboard for an employee
 * 	DeleteTaskboard: Deletes a taskboard for an employee
 * 	GetTaskboard: Gets a complete taskboard, with populated tasks and tasklists. Data will have to be sorted and organized.
 * 	AddTasklist: Adds a tasklist to a task board
 * 	DeleteTasklist: Removes a tasklist from a task board
 * 	MoveTaskList: Moves tasklist to another board
 * 	ChangeTasklistName: Changes a tasklist's name
 * 	GetPopulatedTasklist: Gets a task list with all the tasks
 * 	CreateTask: Creates a task inside of a tasklist
 * 	SetTaskStatus: Sets a single task as status, or all of its children to status
 * 	GetTasks: Gets the tasks in a single tasklist
 * 	SetTaskText: Sets the text of a single task
 * 	DeleteTask: Deletes a single task
 * 	SetTaskParent: Sets the task parent to another id. Undefined means remove parent.
 * Private Functions: 
 */
/*
 * Purpose: Creates a taskboard for an employee
 * @param user: The id or user object the taskboard belongs to (default: undefined)
 * @param name: The name of the taskboard (default: undefined)
 */
export function CreateTaskboard(user: number|User , name: string ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes a taskboard for an employee
 * @param user: The id or user object doing the deleting (default: undefined)
 * @param taskboard: The id or taskboard object to be deleted (default: undefined)
 */
export function DeleteTaskboard(user: number|User , taskboard: number|Taskboard ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a complete taskboard, with populated tasks and tasklists. Data will have to be sorted and organized.
 * @param taskboard: The taskboard to pull the tasks from (default: undefined)
 * @param user: The user pulling the taskboard (default: undefined)
 */
export function GetTaskboard(taskboard: number|Taskboard , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Adds a tasklist to a task board
 * @param name: The name of the tasklist (default: undefined)
 * @param user: The id or user to add the tasklist to (default: undefined)
 * @param taskboard: the id or taskboard to add the tasklist to (default: undefined)
 */
export function AddTasklist(name: string , user: number|User , taskboard: number|Taskboard ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a tasklist from a task board
 * @param tasklist: The id or Tasklist object to be removed (default: undefined)
 * @param user: The user removing the tasklist (default: undefined)
 */
export function DeleteTasklist(tasklist: number|Tasklist , user: number|Tasklist ) {
	throw 'Not implemented'
}
/*
 * Purpose: Moves tasklist to another board
 * @param tasklist: The tasklist to be moved (default: undefined)
 * @param board: The taskboard to move the tasklist to (default: undefined)
 */
export function MoveTaskList(tasklist: number|Tasklist , board: number|Taskboard ) {
	throw 'Not implemented'
}
/*
 * Purpose: Changes a tasklist's name
 * @param newname: The new name for the tasklist (default: undefined)
 * @param tasklist: The id or tasklist object to rename (default: undefined)
 * @param user: The id or User object doing the renaming (default: undefined)
 */
export function ChangeTasklistName(newname: string , tasklist: number|Tasklist , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a task list with all the tasks
 * @param tasklist: The tasklist to get. Id can not be unset. (default: undefined)
 * @param user: The user requesting the tasklist (default: undefined)
 */
export function GetPopulatedTasklist(tasklist: number|Tasklist , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a task inside of a tasklist
 * @param message: The task to be completed (default: undefined)
 * @param tasklist: The id or tasklist object to add the task to (default: undefined)
 * @param user: The id or User object adding the task (default: undefined)
 * @param completed: Whether or not it should be set to completed (default: false)
 */
export function CreateTask(message: string , tasklist: number|Tasklist , user: number|User , completed: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets a single task as status, or all of its children to status
 * @param task: The id or task object to set as complete (default: undefined)
 * @param isCompleted: The value to give to IsCompleted (default: undefined)
 * @param user: The id or user object setting the task to isCompleted (default: undefined)
 */
export function SetTaskStatus(task: number|Task , isCompleted: boolean , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets the tasks in a single tasklist
 * @param tasklist: The tasklist to get the tasks from (default: undefined)
 * @param user: The user requesting the tasks (default: undefined)
 */
export function GetTasks(tasklist: number|Tasklist , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets the text of a single task
 * @param task: The task to update (default: undefined)
 * @param newText: The new text for the task (default: undefined)
 * @param user: The user setting the text (default: undefined)
 */
export function SetTaskText(task: number|Task , newText: string , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes a single task
 * @param task: The task to be deleted (default: undefined)
 * @param user: The user deleting the task (default: undefined)
 */
export function DeleteTask(task: number|Task , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets the task parent to another id. Undefined means remove parent.
 * @param task: The task that is being set (default: undefined)
 * @param parent: The id or task of the parent (default: undefined)
 */
export function SetTaskParent(task: number|Task , parent: number|Task ) {
	throw 'Not implemented'
}


