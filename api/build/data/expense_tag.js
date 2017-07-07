"use strict";
exports.__esModule = true;
var ExpenseTag = (function () {
    function ExpenseTag(id, expense_id, tag_id) {
        this.tablename = 'expense_tag';
        this.id = id;
        this.expense_id = expense_id;
        this.tag_id = tag_id;
    }
    return ExpenseTag;
}());
exports["default"] = ExpenseTag;
ExpenseTag.prototype.tablename = 'expense_tag';
