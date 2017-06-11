"use strict";
exports.__esModule = true;
exports.tablename = 'expense_tag';
var ExpenseTag = (function () {
    function ExpenseTag(id, expense_id, tag_id) {
        this.id = id;
        this.expense_id = expense_id;
        this.tag_id = tag_id;
    }
    return ExpenseTag;
}());
exports["default"] = ExpenseTag;
