"use strict";
exports.__esModule = true;
var Taskboard = (function () {
    function Taskboard(id, name, creator_id) {
        this.tablename = 'taskboard';
        this.id = id;
        this.name = name;
        this.creator_id = creator_id;
    }
    return Taskboard;
}());
exports["default"] = Taskboard;
Taskboard.prototype.tablename = 'taskboard';
