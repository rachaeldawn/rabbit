var ExpenseRouter = require("../routers/expense");
describe('#ExpenseRouter', function () {
});
tion();
{
    describe("CreateExpense", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have write permission on expenses");
        it("Refuses if user does not have read permission on expenses");
        it("Refuses bad form parameters");
        it("Creates new expense");
    });
    describe("CreateBill", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have write permission on expense");
        it("Refuses if user does not have read permission on expense");
        it("Undefined if expense does not exist");
        it("Refuses if expense is set to inactive");
        it("Creates new bill");
    });
    describe("GetExpense", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Undefined if expense does not exist");
        it("Returns expense");
    });
    describe("GetBill", function () {
        it("Refuses if user does not user");
        it("Refuses if user does not have read permission on expenses");
        it("Undefined if bill does not exist");
        it("Returns bill obect");
    });
    describe("ListExpenses", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Caps out at max 100");
        it("Returns list of expenses");
    });
    describe("ListBills", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Caps out at max 100");
        it("Returns a list of bills specific to expense if expense defined");
        it("Returns a list of bills");
    });
    describe("PageExpenses", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permissions on expenses");
        it("Refuses if page is negative");
    });
    describe("PageBills", function () {
        it("Refuses nonexistent users");
        it("Refuses if user does not have read permission");
        it("Refuses if page is less than 1");
        it("Caps out at max 100");
        it("Returns page of bills");
    });
    describe("AdjustBill", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Refuses if user does not have write permission on expense");
        it("Refuses bad form update object (no valid fields)");
        it("Negates old bill");
        it("Creates new bill");
    });
    describe("UpdateExpense", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Refuses if user does not have write permission on expense");
        it("Undefined if expense does not exist");
        it("Refuses bad form update object (no valid fields)");
        it("Updates all fields");
    });
    describe("DeactivateExpense", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Refuses if user does not have write permission on expense");
        it("Sets expense inactive");
    });
    describe("ActivateExpense", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Refuses if user does not have write permission on expense");
        it("Sets expense active");
    });
    describe("SetExpenseIsActive", function () {
        it("Undefined if user does not exist");
        it("Refuses if user does not have read permission on expense");
        it("Refuses if user does not have write permission on expense");
        it("Sets the expense is_active to Status");
    });
}
