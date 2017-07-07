var CustomerController = require("../../controllers/customer");
describe('#CustomerController', function () {
    describe("CreateCustomer", function () {
        it('Refuses invalid token');
        it('Refuses missing required fields');
        it('Sets start date to now (within 20 minutes +/-)');
        it('Creates new customer');
    });
    describe("UpdateCustomer", function () {
        it('Approves Customer user');
        it('Approves Employee user with permission');
        it('Undefined on invalid cust');
        it('Undefined on invalid user');
        it('Refuses bad form update object (no valid fields)');
        it('Updates all fields');
    });
    describe("GetCustomer", function () {
        it('Undefined if user does not exist');
        it('Undefined if cust does not exist');
        it('Refuses if user does not have permission to retrieve Customer object');
        it('Returns customer object');
    });
    describe("ListCustomer", function () {
        it('Undefined if user does not exist');
        it('Refuses if user does not have read permission on customers');
        it('Caps out at 100');
        it('Returns list of customer');
        it('Returns list of customer with contacts created if populated true');
    });
    describe("PageCustomer", function () {
        it('Undefined  if user does not exist');
        it('Refuses if user does not have read permission on customer');
        it('Caps out at 100');
        it('Returns page of customer');
        it('Returns page of customer with contacts created if populated true');
    });
    describe("CreateContact", function () {
        it('Refuses missing required fields');
        it('Refuses if user is neither an employee, or the customer');
        it('Refuses if user does not have read permission on customers');
        it('Refuses if user does not have write permission on customers');
        it('Creates new customer contact');
    });
    describe("GetContact", function () {
        it('Refuses if user does not have read permission on contacts (if employee)');
        it('Undefined if user does not exist');
        it('Undefined if contact does not exist');
        it('Refuses if user is not an employee or the customer the contact belongs to');
        it('Gets contact');
    });
    describe("ListContacts", function () {
        it('Undefined if user does not exist');
        it('Refuses if user does not have read permission on customer');
        it('Approves if user is the customer defined in customer');
        it('Caps out at max 100');
        it('Undefined if customer specified, and customer has no contacts');
        it('Returns list of contacts');
        it('Returns list of contacts belonging to customer if customer specified');
    });
    describe("PageContacts", function () {
        it('Undefined if user does not exist');
        it('Refuses if user does not have read permission on customer');
        it('Approves if user is the customer defined in customer');
        it('Caps out at max 100');
        it('Undefined if customer specified, and customer has no contacts');
        it('Returns list of contacts');
        it('Returns list of contacts belonging to customer if customer specified');
    });
    describe("UpdateContact", function () {
        it('Undefined if user or contact does not exist');
        it('Refuses bad form update object (no valid fields)');
        it('Refuses if user is not the customer, or an employee with read and write permissions');
        it('Updates all fields');
    });
    describe("DeleteContact", function () {
        it('Undefined if contact or user do not exist');
        it('Refuses if user is not the customer that the contact belongs to, or an employee with read/write permissions on customers');
        it('Sets contact to deleted');
    });
});