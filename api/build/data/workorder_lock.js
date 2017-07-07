"use strict";
exports.__esModule = true;
var WorkorderLock = (function () {
    function WorkorderLock(id, user_id) {
        this.tablename = 'workorder_lock';
        this.id = id;
        this.user_id = user_id;
    }
    return WorkorderLock;
}());
exports["default"] = WorkorderLock;
WorkorderLock.prototype.tablename = 'workorder_lock';
