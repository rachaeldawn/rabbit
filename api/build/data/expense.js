"use strict";
exports.__esModule = true;
var Expense = (function () {
    function Expense(id, name, description, is_active) {
        this.tablename = 'expense';
        this.id = id;
        this.name = name;
        this.description = description;
        this.is_active = is_active;
    }
    return Expense;
}());
exports["default"] = Expense;
Expense.prototype.tablename = 'expense';
