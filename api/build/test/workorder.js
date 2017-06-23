var WorkorderRouter = require("../routers/workorder");
describe('#WorkorderRouter', function () {
});
tion();
{
    describe("CreateWorkorder", function () {
        it("Undefined if the customer does not exist");
        it("Refuses if the employee can not be found using the user id");
        it("Undefined if user does not exist");
        it("Refuses if the user does not have permission to create workorders");
        it("Creates a workorder");
        it("Returns a workorder object");
    });
    describe("RequestWorkorderLock", function () {
        it("Refuses if the user does not have read permissions on workorder");
        it("Refuses if the user does not have write permissions on workorder");
        it("Undefined if the workorder does not exist");
        it("Undefined if user does not exist");
        it("Refuses if the workorder is already locked");
        it("Refuses if the user is not an employee");
        it("Returns true");
    });
    describe("IsWorkorderLocked", function () {
        it("Undefined if user does not exist");
        it("Refuses if the user does not have read permissions on the invoice");
        it("Refuses if the user does not have write permissions on the invoice");
        it("Undefined if the workorder does not exist");
        it("Returns whether or not the invoice is locked");
    });
    describe("ReleaseWorkorderLock", function () {
        it("Refuses if the user does not have the lock");
        it("Undefined if user does not exist");
        it("Refuses if the user is not an employee");
        it("Ignores if the workorder is not locked");
        it("Removes the lock from the workorder");
    });
    describe("AddToWorkorder", function () {
        it("Refuses if the user does not have permission to modify the invoice");
        it("Undefined if user does not exist");
        it("Refuses if the user is not an employee");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Refuses if the employee can not be found using the user id");
        it("Undefined if the service does not exist");
        it("Undefined if the workorder does not exist");
        it("Adds service to the workorder");
    });
    describe("RemoveFromWorkorder", function () {
        it("Undefined if user does not exist");
        it("Undefined if the workorder does not exist");
        it("Undefined if the workorder item does not exist");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Refuses if the employee can not be found using the user id");
        it("Refuses if the user does not have permission to modify the invoice");
        it("Removes from the workorder");
    });
    describe("CloseWorkorder", function () {
        it("Undefined if user does not exist");
        it("Refuses if the user does not have permission to modify the invoice");
        it("Undefined if the workorder does not exist");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Automatically releases any locks after closure");
    });
    describe("AddWorkorderContact", function () {
        it("Undefined if user does not exist");
        it("Undefined if the workorder does not exist");
        it("Undefined if the contact does not exist");
        it("Refuses if the user does not have write permissions on the invoice");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Refuses if the user does not have read permissions on the invoice");
        it("Adds the contact to the workorder");
    });
    describe("RemoveWorkorderContact", function () {
        it("Undefined if user does not exist");
        it("Undefined if the workorder does not exist");
        it("Undefined if the contact does not exist");
        it("Refuses if the user does not have write permissions on the invoice");
        it("Refuses if the user does not have read permissions on the invoice");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Removes the contact from the workorder");
    });
    describe("AddTransaction", function () {
        it("Undefined if user does not exist");
        it("Undefined if the workorder does not exist");
        it("Undefined if the contact does not exist");
        it("Refuses if the contact is not allowed to make payments");
        it("Refuses if the contact is not a contact of the invoice");
        it("Undefined if the transaction object does not exist with stripe");
        it("Links transaction to the workorder");
    });
    describe("ConvertEstimateToWorkorder", function () {
        it("Undefined if user does not exist");
        it("Undefined if the estimate does not exist");
        it("Refuses if the user does not have permission to create invoices");
        it("Creates a workorder based on the estimate");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("New estimate contains all items of estimate");
        it("New estimate contains all contacts of estimate");
    });
    describe("GetWorkorder", function () {
        it("Undefined if user does not exist");
        it("Undefined if the workorder does not exist");
        it("Refuses if the user does not have read permissions on the invoice");
        it("Gets a populated version of the workorder");
    });
    describe("ListWorkorders", function () {
        it("Undefined  if user does not exist");
        it("Refuses if user does not have read permission on Workorders");
        it("Returns list of workorders");
        it("Returns list of workorders with populated items if populated true");
    });
    describe("PageWorkorders", function () {
        it("Undefined  if user does not exist");
        it("Refuses if user does not have read permission on Workorders");
        it("Returns list of workorders");
        it("Returns list of workorders with populated items if populated true");
    });
}
