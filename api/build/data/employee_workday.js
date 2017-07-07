"use strict";
exports.__esModule = true;
var EmployeeWorkday = (function () {
    function EmployeeWorkday(id, employee_id, clock_in, clock_out) {
        this.tablename = 'employee_workday';
        this.id = id;
        this.employee_id = employee_id;
        this.clock_in = clock_in;
        this.clock_out = clock_out;
    }
    return EmployeeWorkday;
}());
exports["default"] = EmployeeWorkday;
EmployeeWorkday.prototype.tablename = 'employee_workday';
