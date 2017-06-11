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
    exports.tablename = 'tasklist_task';
    var TasklistTask = (function () {
        function TasklistTask(id, parent_task_id, is_complete, message) {
            this.id = id;
            this.parent_task_id = parent_task_id;
            this.is_complete = is_complete;
            this.message = message;
        }
        return TasklistTask;
    }());
    exports["default"] = TasklistTask;
});
