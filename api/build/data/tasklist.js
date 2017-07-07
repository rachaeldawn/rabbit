"use strict";
exports.__esModule = true;
var Tasklist = (function () {
    function Tasklist(id, board_id, name) {
        this.tablename = 'tasklist';
        this.id = id;
        this.board_id = board_id;
        this.name = name;
    }
    return Tasklist;
}());
exports["default"] = Tasklist;
Tasklist.prototype.tablename = 'tasklist';
