/*
 * @property id: Id of a single workday
 * @property employee_id: The Id of the employee
 * @property clock_in: When the employee clocks in
 * @property clock_out: When the employee clocks out
 */
var tablename = 'employee_workday';
var EmployeeWorkday = (function () {
    function EmployeeWorkday(id, employee_id, clock_in, clock_out) {
        this.id = id;
        this.employee_id = employee_id;
        this.clock_in = clock_in;
        this.clock_out = clock_out;
    }
    return EmployeeWorkday;
}());
EmployeeWorkday.prototype.tablename = tablename;
module.exports = EmployeeWorkday;
module.exports.tablename = tablename;
//# sourceMappingURL=employee_workday.js.map