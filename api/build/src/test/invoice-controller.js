var WorkorderController = require("../controllers/invoice-controller");
describe('#WorkorderController', function () {
    describe('CreateWorkorder', function () {
        it('Refuses if the customer does not exist');
        it('Refuses if the employee can not be found using the user id');
        it('Refuses if the user does not exist');
        it('Refuses if the user does not have permission to create workorders');
        it('Creates a workorder');
        it('Returns a workorder object');
    });
    describe('RequestWorkorderLock', function () {
        it('Refuses if the user does not have read permissions on workorder');
        it('Refuses if the user does not have write permissions on workorder');
        it('Refuses if the workorder does not exist');
        it('Refuses if the user does not exist');
        it('Refuses if the workorder is already locked');
        it('Refuses if the user is not an employee');
        it('Returns true');
    });
    describe('IsWorkorderLocked', function () {
        it('Refuses if the user does not exist');
        it('Refuses if the user does not have read permissions on the invoice');
        it('Refuses if the user does not have write permissions on the invoice');
        it('Refuses if the workorder does not exist');
        it('Returns whether or not the invoice is locked');
    });
    describe('ReleaseWorkorderLock', function () {
        it('Refuses if the user does not have the lock');
        it('Refuses if the user does not exist');
        it('Refuses if the user is not an employee');
        it('Ignores if the workorder is not locked');
        it('Removes the lock from the workorder');
    });
    describe('AddToWorkorder', function () {
        it('Refuses if the user does not have permission to modify the invoice');
        it('Refuses if the user does not exist');
        it('Refuses if the user is not an employee');
        it('Refuses if the employee can not be found using the user id');
        it('Refuses if the service does not exist');
        it('Refuses if the workorder does not exist');
        it('Adds service to the workorder');
    });
    describe('RemoveFromWorkorder', function () {
        it('Refuses if the user does not exist');
        it('Refuses if the workorder does not exist');
        it('Refuses if the workorder item does not exist');
        it('Refuses if the employee can not be found using the user id');
        it('Refuses if the user does not have permission to modify the invoice');
        it('Removes from the workorder');
    });
    describe('CloseWorkorder', function () {
        it('Refuses if the user does not exist');
        it('Refuses if the user does not have permission to modify the invoice');
        it('Refuses if the workorder does not exist');
        it('Refuses if another user has the lock on the invoice');
        it('Automatically releases any locks after closure');
    });
    describe('AddWorkorderContact', function () {
        it('Refuses if the user does not exist');
        it('Refuses if the workorder does not exist');
        it('Refuses if the contact does not exist');
        it('Refuses if the user does not have write permissions on the invoice');
        it('Refuses if the user does not have read permissions on the invoice');
        it('Adds the contact to the workorder');
    });
    describe('RemoveWorkorderContact', function () {
        it('Refuses if the user does not exist');
        it('Refuses if the workorder does not exist');
        it('Refuses if the contact does not exist');
        it('Refuses if the user does not have write permissions on the invoice');
        it('Refuses if the user does not have read permissions on the invoice');
        it('Removes the contact from the workorder');
    });
    describe('AddTransaction', function () {
        it('Refuses if user does not exist');
        it('Refuses if the workorder does not exist');
        it('Refuses if the contact does not exist');
        it('Refuses if the contact is not allowed to make payments');
        it('Refuses if the contact is not a contact of the invoice');
        it('Refuses if the transaction object does not exist with stripe');
        it('Links transaction to the workorder');
    });
    describe('ConvertEstimateToWorkorder', function () {
        it('Refuses if the user does not exist');
        it('Refuses if the estimate does not exist');
        it('Refuses if the user does not have permission to create invoices');
        it('Creates a workorder based on the estimate');
        it('New estimate contains all items of estimate');
        it('New estimate contains all contacts of estimate');
    });
});