/*
 * @property id: Id of an employment period.
 * @property employee_id: Id of the employee table entry
 * @property start_date: Date the employee's employment period started
 * @property end_date: Date the employee's employment period ends (or null for still here)
 */
var tablename = 'employment_period';
var EmploymentPeriod = (function () {
    function EmploymentPeriod(id, employee_id, start_date, end_date) {
        this.id = id;
        this.employee_id = employee_id;
        this.start_date = start_date;
        this.end_date = end_date;
    }
    return EmploymentPeriod;
}());
EmploymentPeriod.prototype.tablename = tablename;
module.exports = EmploymentPeriod;
module.exports.tablename = tablename;
//# sourceMappingURL=employment_period.js.map