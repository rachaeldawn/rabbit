(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    /*
     * Exported Functions:
     * 	CreateTaskboard: Creates a taskboard for an employee
     * 	DeleteTaskboard: Deletes a taskboard for an employee
     * 	GetPopulatedTaskboard: Gets a complete taskboard, with populated tasks and tasklists. Data will have to be sorted and organized.
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
    function CreateTaskboard(user, name) {
        throw 'Not implemented';
    }
    exports.CreateTaskboard = CreateTaskboard;
    /*
     * Purpose: Deletes a taskboard for an employee
     * @param user: The id or user object doing the deleting (default: undefined)
     * @param taskboard: The id or taskboard object to be deleted (default: undefined)
     */
    function DeleteTaskboard(user, taskboard) {
        throw 'Not implemented';
    }
    exports.DeleteTaskboard = DeleteTaskboard;
    /*
     * Purpose: Gets a complete taskboard, with populated tasks and tasklists. Data will have to be sorted and organized.
     * @param taskboard: The taskboard to pull the tasks from (default: undefined)
     * @param user: The user pulling the taskboard (default: undefined)
     */
    function GetPopulatedTaskboard(taskboard, user) {
        throw 'Not implemented';
    }
    exports.GetPopulatedTaskboard = GetPopulatedTaskboard;
    /*
     * Purpose: Adds a tasklist to a task board
     * @param name: The name of the tasklist (default: undefined)
     * @param user: The id or user to add the tasklist to (default: undefined)
     * @param taskboard: the id or taskboard to add the tasklist to (default: undefined)
     */
    function AddTasklist(name, user, taskboard) {
        throw 'Not implemented';
    }
    exports.AddTasklist = AddTasklist;
    /*
     * Purpose: Removes a tasklist from a task board
     * @param tasklist: The id or Tasklist object to be removed (default: undefined)
     * @param user: The user removing the tasklist (default: undefined)
     */
    function DeleteTasklist(tasklist, user) {
        throw 'Not implemented';
    }
    exports.DeleteTasklist = DeleteTasklist;
    /*
     * Purpose: Moves tasklist to another board
     * @param tasklist: The tasklist to be moved (default: undefined)
     * @param board: The taskboard to move the tasklist to (default: undefined)
     */
    function MoveTaskList(tasklist, board) {
        throw 'Not implemented';
    }
    exports.MoveTaskList = MoveTaskList;
    /*
     * Purpose: Changes a tasklist's name
     * @param newname: The new name for the tasklist (default: undefined)
     * @param tasklist: The id or tasklist object to rename (default: undefined)
     * @param user: The id or User object doing the renaming (default: undefined)
     */
    function ChangeTasklistName(newname, tasklist, user) {
        throw 'Not implemented';
    }
    exports.ChangeTasklistName = ChangeTasklistName;
    /*
     * Purpose: Gets a task list with all the tasks
     * @param tasklist: The tasklist to get. Id can not be unset. (default: undefined)
     * @param user: The user requesting the tasklist (default: undefined)
     */
    function GetPopulatedTasklist(tasklist, user) {
        throw 'Not implemented';
    }
    exports.GetPopulatedTasklist = GetPopulatedTasklist;
    /*
     * Purpose: Creates a task inside of a tasklist
     * @param message: The task to be completed (default: undefined)
     * @param tasklist: The id or tasklist object to add the task to (default: undefined)
     * @param user: The id or User object adding the task (default: undefined)
     * @param completed: Whether or not it should be set to completed (default: false)
     */
    function CreateTask(message, tasklist, user, completed) {
        if (completed === void 0) { completed = false; }
        throw 'Not implemented';
    }
    exports.CreateTask = CreateTask;
    /*
     * Purpose: Sets a single task as status, or all of its children to status
     * @param task: The id or task object to set as complete (default: undefined)
     * @param isCompleted: The value to give to IsCompleted (default: undefined)
     * @param user: The id or user object setting the task to isCompleted (default: undefined)
     */
    function SetTaskStatus(task, isCompleted, user) {
        throw 'Not implemented';
    }
    exports.SetTaskStatus = SetTaskStatus;
    /*
     * Purpose: Gets the tasks in a single tasklist
     * @param tasklist: The tasklist to get the tasks from (default: undefined)
     * @param user: The user requesting the tasks (default: undefined)
     */
    function GetTasks(tasklist, user) {
        throw 'Not implemented';
    }
    exports.GetTasks = GetTasks;
    /*
     * Purpose: Sets the text of a single task
     * @param task: The task to update (default: undefined)
     * @param newText: The new text for the task (default: undefined)
     * @param user: The user setting the text (default: undefined)
     */
    function SetTaskText(task, newText, user) {
        throw 'Not implemented';
    }
    exports.SetTaskText = SetTaskText;
    /*
     * Purpose: Deletes a single task
     * @param task: The task to be deleted (default: undefined)
     * @param user: The user deleting the task (default: undefined)
     */
    function DeleteTask(task, user) {
        throw 'Not implemented';
    }
    exports.DeleteTask = DeleteTask;
    /*
     * Purpose: Sets the task parent to another id. Undefined means remove parent.
     * @param task: The task that is being set (default: undefined)
     * @param parent: The id or task of the parent (default: undefined)
     */
    function SetTaskParent(task, parent) {
        throw 'Not implemented';
    }
    exports.SetTaskParent = SetTaskParent;
});
