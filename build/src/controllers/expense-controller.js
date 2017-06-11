(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function CreateExpense(name, description, user, isActive) {
        if (isActive === void 0) { isActive = true; }
        throw 'Not implemented';
    }
    exports.CreateExpense = CreateExpense;
    function CreateBill(expense, amt, billing_date, user) {
        throw 'Not implemented';
    }
    exports.CreateBill = CreateBill;
    function GetExpense(expense, user) {
        throw 'Not implemented';
    }
    exports.GetExpense = GetExpense;
    function GetBill(bill, user) {
        throw 'Not implemented';
    }
    exports.GetBill = GetBill;
    function ListExpenses(amt, user) {
        throw 'Not implemented';
    }
    exports.ListExpenses = ListExpenses;
    function ListBills(amt, user, expense) {
        if (expense === void 0) { expense = -1; }
        throw 'Not implemented';
    }
    exports.ListBills = ListBills;
    function PageExpenses(amt, page, user) {
        throw 'Not implemented';
    }
    exports.PageExpenses = PageExpenses;
    function PageBills(amt, page, user, expense) {
        if (expense === void 0) { expense = -1; }
        throw 'Not implemented';
    }
    exports.PageBills = PageBills;
    function AdjustBill(bill, obj, user) {
        throw 'Not implemented';
    }
    exports.AdjustBill = AdjustBill;
    function UpdateExpense(expense, obj, user) {
        throw 'Not implemented';
    }
    exports.UpdateExpense = UpdateExpense;
    function DeactivateExpense(expense, user) {
        throw 'Not implemented';
    }
    exports.DeactivateExpense = DeactivateExpense;
    function ActivateExpense(expense, user) {
        throw 'Not implemented';
    }
    exports.ActivateExpense = ActivateExpense;
    function SetExpenseIsActive(expense, user, status) {
        throw 'Not implemented';
    }
    exports.SetExpenseIsActive = SetExpenseIsActive;
});
