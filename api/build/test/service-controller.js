var ServiceController = require("../controllers/service-controller");
describe('#ServiceController', function () {
    describe("CreateService", function () {
        it("Refuses missing parameters");
        it("Refuses invalid types");
        it("Refuses if the user does not have add permissions for the services");
        it("Refuses if the user is not an employee");
        it("Creates the service");
    });
    describe("GetService", function () {
        it("Refuses if the user does not have permission to read services");
        it("Undefined if the service does not exist");
        it("Undefined if user does not exist");
        it("Refuses if the user is not an employee");
        it("Returns a single service object");
    });
    describe("ListServices", function () {
        it("Returns a list of Services");
        it("Refuses if the user is not an employee");
    });
    describe("PageServices", function () {
        it("Refuses if the user is not an employee");
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on Services");
        it("Refuses negative page");
        it("Returns a page of services");
    });
    describe("UpdateService", function () {
        it("Refuses if the user does not have permission to update service");
        it("Undefined if user does not exist");
        it("Refuses if the user is not an employee");
        it("Undefined if the service does not exist");
        it("Refuses bad form update object (no valid fields)");
        it("Updates the service");
    });
    describe("ArchiveService", function () {
        it("Undefined if user or service are undefined");
        it("Refuses if user does not have read permission on services");
        it("Refuses if user does not have write permission on services");
        it("Sets service to archived");
    });
    describe("UnarchiveService", function () {
        it("Undefined if user or service are undefined");
        it("Refuses if user does not have read permission on services");
        it("Refuses if user does not have write permission on services");
        it("Sets service to unarchived");
    });
    describe("SetServiceArchived", function () {
        it("Undefined if user or service are undefined");
        it("Refuses if user does not have read permission on services");
        it("Refuses if user does not have write permission on services");
        it("Sets service to status");
    });
});
