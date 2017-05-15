/*
 * @property id: Id of a single work-journal (employees can have many)
 * @property employee_id: Id of the employee that owns the work journal
 * @property name: The name of the work journal
 */
var tablename = 'employee_workjournal';
var EmployeeWorkjournal = (function () {
    function EmployeeWorkjournal(id, employee_id, name) {
        this.id = id;
        this.employee_id = employee_id;
        this.name = name;
    }
    return EmployeeWorkjournal;
}());
EmployeeWorkjournal.prototype.tablename = tablename;
module.exports = EmployeeWorkjournal;
module.exports.tablename = tablename;
//# sourceMappingURL=employee_workjournal.js.map