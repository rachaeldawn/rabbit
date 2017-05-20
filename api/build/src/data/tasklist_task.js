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
    var Data = require("../data");
    /*
     * @property id: The id of the task in the database
     * @property parent_task_id: Null if it is not nested with anything, or the Id of the task this entry is inside
     * @property is_complete: A true/false value on whether or not the task is complete
     * @property message: The message indicating what the todo is
     */
    exports.tablename = 'tasklist_task';
    var TasklistTask = (function () {
        function TasklistTask(id, parent_task_id, is_complete, message) {
            this.id = id;
            this.parent_task_id = parent_task_id;
            this.is_complete = is_complete;
            this.message = message;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return TasklistTask;
    }());
    exports["default"] = TasklistTask;
    TasklistTask.Delete = Data.Delete.bind(TasklistTask.Delete);
    TasklistTask.prototype.tablename = exports.tablename;
    TasklistTask.Page = Data.Page.bind(TasklistTask.Page);
    TasklistTask.List = Data.List.bind(TasklistTask.List);
    TasklistTask.Save = Data.Save.bind(TasklistTask.Save);
    TasklistTask.Sync = Data.Sync.bind(TasklistTask.Sync);
    TasklistTask.Search = Data.Search.bind(TasklistTask.Search);
    TasklistTask.Update = Data.Update.bind(TasklistTask.Update);
});
