var PayrollController = require("../../controllers/payroll");
describe('#PayrollController', function () {
    describe("CreatePeriod", function () {
        it('Creates a new pay period');
        it('Refuses if there\'s an existing period in that timeframe');
        it('Refuses if the user does not have permission to create new pay periods');
        it('Refuses if the starting date is in the past');
        it('Refuses if user does not have write permission on payroll');
        it('Refuses if the start date is after the end date');
    });
    describe("CreatePayroll", function () {
        it('Refuses if there is already an active payroll for the employee');
        it('Undefined if the period does not exist');
        it('Undefined if the employee does not exist');
        it('Refuses if user does not have write permissions on payroll');
        it('Refuses if user does not have read permissions on payroll');
        it('Creates a new payroll');
        it('Adds all of the items');
    });
    describe("AddPayrollItem", function () {
        it('Undefined if payroll entry does not exist');
        it('Refuses if name is longer than 50 characters');
        it('Undefined if user does not exist');
        it('Refuses on missing values');
        it('Refuses if user does not have read permissions on payroll');
        it('Refuses if user does not have write permissions on payroll');
    });
    describe("RemovePayrollItem", function () {
        it('');
    });
    describe("UpdatePayrollItem", function () {
        it('Undefined if user does not exist');
        it('Refuses if user does not have write permissions on payroll');
        it('Refuses if user does not have read permissions on payroll');
        it('Undefined if payrollitem does not exist');
        it('Refuses bad form update object (no valid fields)');
        it('Updates all fields');
    });
    describe("UpdatePayPeriod", function () {
        it('Refuses bad form update object (no valid fields)');
        it('Undefined if user does not exist');
        it('Refuses if user does not have read permissions on payroll');
        it('Refuses if user does not have write permissions on payroll');
        it('Updates all fields');
    });
    describe("GetPayPeriod", function () {
        it('Undefined if user does not exist');
        it('Undefined if period does not exist');
        it('Refuses if user does not have read permissions on payroll');
        it('Returns period object');
        it('Returns populated payroll object if populated true');
    });
    describe("GetPayroll", function () {
    });
    describe("ListPayPeriod", function () {
        it('Caps out at 100');
        it('Undefined if user does not exist');
        it('Refuses if user does not have read permissions on payroll');
        it('Undefined if Pay Period does not exist');
        it('Returns populated list if populated true');
        it('Returns list of pay periods');
    });
    describe("ListPayroll", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have read permissions on payroll');
        it('Caps out at max 100');
        it('Returns populated list if populated true');
        it('Returns list of payroll objects');
    });
    describe("PagePayPeriod", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have read permission on payroll');
        it('Refuses negative page');
        it('Returns the correct amount');
        it('Skips the proper amount');
        it('Returns populated list of populated true');
        it('Returns normal list if populated false');
    });
    describe("PagePayroll", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have read permissions on payroll');
        it('Refuses negative page');
        it('Caps out at 100');
        it('Skips the proper amount');
        it('Returns normal list if populated false');
        it('Returns populated list if populated true');
    });
    describe("LockPayroll", function () {
        it('Undefined if user or payroll objects do not exist');
        it('Refuses if user does not have write permission on payroll');
        it('Refuses if user does not have read permission on payroll');
        it('Refuses if lock already exists on payroll object');
        it('Returns true if user already has lock, or object becomes locked');
    });
    describe("ReleasePayroll", function () {
        it('Undefined if user or payroll object does not exist');
        it('Refuses if user does not own lock, and does not possess force unlock permission');
        it('Releases lock');
    });
});
