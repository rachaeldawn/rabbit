"use strict";
exports.__esModule = true;
exports.tablename = 'taskboard';
var Taskboard = (function () {
    function Taskboard(id, name, creator_id) {
        this.id = id;
        this.name = name;
        this.creator_id = creator_id;
    }
    return Taskboard;
}());
exports["default"] = Taskboard;
