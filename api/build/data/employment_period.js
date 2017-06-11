"use strict";
exports.__esModule = true;
exports.tablename = 'employment_period';
var EmploymentPeriod = (function () {
    function EmploymentPeriod(id, employee_id, start_date, end_date) {
        this.id = id;
        this.employee_id = employee_id;
        this.start_date = start_date;
        this.end_date = end_date;
    }
    return EmploymentPeriod;
}());
exports["default"] = EmploymentPeriod;
