var EstimateController = require("../controllers/estimate");
describe('#EstimateController', function () {
    describe("CreateEstimate", function () {
        it("Undefined if user does not exist");
        it("Refuses if the user is not an employee");
        it("Refuses if the validity period is not above 0");
        it("Undefined if the the customer does not exist");
        it("Refuses if the user does not have permission to create estimates");
        it("Ignores the invalid services");
        it("Creates the estimate");
    });
    describe("LockEstimate", function () {
    });
    describe("ReleaseLock", function () {
        it("Undefined if user or estimate does not exist");
        it("Refuses if user does not own the lock, and does not have force unlock permission");
        it("Releases lock");
    });
    describe("AddItem", function () {
        it("Undefined if user does not exist");
        it("Refuses if the user is not an employee");
        it("Refuses if the user does not have write permissions on the invoice");
        it("Refuses if the user does not have read permissions on the invoice");
        it("Undefined if the service does not exist");
        it("Undefined if the estimate does not exist");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Adds item to the estimate");
    });
    describe("RemoveItem", function () {
        it("Undefined if user does not exist");
        it("Undefined if the estimate does not exist");
        it("Undefined if the item does not exist on the estimate");
        it("Refuses if the user does not have write permissions on the estimate");
        it("Refuses if the user does not have read permissions on the estimate");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Removes the item from the estimate");
    });
    describe("SetValidityPeriod", function () {
        it("Undefined if user does not exist");
        it("Undefined if the estimate does not exist");
        it("Refuses if the user does not have write permissions on the estimate");
        it("Refuses if the user does not have read permissions on the estimate");
        it("Refuses if the validity period is not above 0");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Sets the validity period");
    });
    describe("GetEstimate", function () {
        it("Undefined if user does not exist");
        it("Undefined if the estimate does not exist");
        it("Refuses if the user does not have read permissions");
        it("Gets a populated version of the estimate");
    });
    describe("AddContact", function () {
        it("Undefined if user does not exist");
        it("Undefined if the contact does not exist");
        it("Undefined if the estimate does not exist");
        it("Refuses if the user does not have read permissions");
        it("Refuses if the user does not have write permissions");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Refuses if the user is not an employee");
        it("Adds the contact to the estimate");
    });
    describe("RemoveContact", function () {
        it("Undefined if user does not exist");
        it("Refuses if the user does not have write permissions on the estimate");
        it("Refuses if the user does not have read permissions on the estimate");
        it("Ignores if the contact is not in the estimate");
        it("Refuses if there is no lock");
        it("Refuses if lock is not owned by user");
        it("Undefined if the estimate does not exist");
        it("Removes the contact from the estimate");
    });
});
