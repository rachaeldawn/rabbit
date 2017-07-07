"use strict";
exports.__esModule = true;
var EstimateLock = (function () {
    function EstimateLock(id, user_id) {
        this.tablename = 'estimate_lock';
        this.id = id;
        this.user_id = user_id;
    }
    return EstimateLock;
}());
exports["default"] = EstimateLock;
EstimateLock.prototype.tablename = 'estimate_lock';
