"use strict";
exports.__esModule = true;
exports.tablename = 'taskboard_participant';
var TaskboardParticipant = (function () {
    function TaskboardParticipant(id, taskboard_id, user_id, can_write, can_delete, can_invite) {
        this.id = id;
        this.taskboard_id = taskboard_id;
        this.user_id = user_id;
        this.can_write = can_write;
        this.can_delete = can_delete;
        this.can_invite = can_invite;
    }
    return TaskboardParticipant;
}());
exports["default"] = TaskboardParticipant;
