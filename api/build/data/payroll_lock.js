"use strict";
exports.__esModule = true;
var PayrollLock = (function () {
    function PayrollLock(id, user_id) {
        this.tablename = 'payroll_lock';
        this.id = id;
        this.user_id = user_id;
    }
    return PayrollLock;
}());
exports["default"] = PayrollLock;
PayrollLock.prototype.tablename = 'payroll_lock';
