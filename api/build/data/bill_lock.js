"use strict";
exports.__esModule = true;
var BillLock = (function () {
    function BillLock(id, user_id) {
        this.tablename = 'bill_lock';
        this.id = id;
        this.user_id = user_id;
    }
    return BillLock;
}());
exports["default"] = BillLock;
BillLock.prototype.tablename = 'bill_lock';
