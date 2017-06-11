"use strict";
exports.__esModule = true;
exports.tablename = 'employee_workday';
var EmployeeWorkday = (function () {
    function EmployeeWorkday(id, employee_id, clock_in, clock_out) {
        this.id = id;
        this.employee_id = employee_id;
        this.clock_in = clock_in;
        this.clock_out = clock_out;
    }
    return EmployeeWorkday;
}());
exports["default"] = EmployeeWorkday;
