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
    function CreateTaskboard(user, name) {
        throw 'Not implemented';
    }
    exports.CreateTaskboard = CreateTaskboard;
    function DeleteTaskboard(user, taskboard) {
        throw 'Not implemented';
    }
    exports.DeleteTaskboard = DeleteTaskboard;
    function GetTaskboard(taskboard, user) {
        throw 'Not implemented';
    }
    exports.GetTaskboard = GetTaskboard;
    function AddTasklist(name, user, taskboard) {
        throw 'Not implemented';
    }
    exports.AddTasklist = AddTasklist;
    function DeleteTasklist(tasklist, user) {
        throw 'Not implemented';
    }
    exports.DeleteTasklist = DeleteTasklist;
    function MoveTaskList(tasklist, board) {
        throw 'Not implemented';
    }
    exports.MoveTaskList = MoveTaskList;
    function ChangeTasklistName(newname, tasklist, user) {
        throw 'Not implemented';
    }
    exports.ChangeTasklistName = ChangeTasklistName;
    function GetPopulatedTasklist(tasklist, user) {
        throw 'Not implemented';
    }
    exports.GetPopulatedTasklist = GetPopulatedTasklist;
    function CreateTask(message, tasklist, user, completed) {
        throw 'Not implemented';
    }
    exports.CreateTask = CreateTask;
    function SetTaskStatus(task, isCompleted, user) {
        throw 'Not implemented';
    }
    exports.SetTaskStatus = SetTaskStatus;
    function GetTasks(tasklist, user) {
        throw 'Not implemented';
    }
    exports.GetTasks = GetTasks;
    function SetTaskText(task, newText, user) {
        throw 'Not implemented';
    }
    exports.SetTaskText = SetTaskText;
    function DeleteTask(task, user) {
        throw 'Not implemented';
    }
    exports.DeleteTask = DeleteTask;
    function SetTaskParent(task, parent) {
        throw 'Not implemented';
    }
    exports.SetTaskParent = SetTaskParent;
});
