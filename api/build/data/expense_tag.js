/*
 * @property id: The id of the tag-expense pair
 * @property expense_id: The id of the expense to be tagged
 * @property tag_id: The tag id to be bound
 */
var tablename = 'expense_tag';
var ExpenseTag = (function () {
    function ExpenseTag(id, expense_id, tag_id) {
        this.id = id;
        this.expense_id = expense_id;
        this.tag_id = tag_id;
    }
    return ExpenseTag;
}());
ExpenseTag.prototype.tablename = tablename;
module.exports = ExpenseTag;
module.exports.tablename = tablename;
//# sourceMappingURL=expense_tag.js.map