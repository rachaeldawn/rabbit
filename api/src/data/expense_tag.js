/*
 * @property id: The id of the tag-expense pair
 * @property expense_id: The id of the expense to be tagged
 * @property tag_id: The tag id to be bound
 */
const tablename = 'expense_tag'
class ExpenseTag {
	constructor(id, expense_id, tag_id){
		this.id = id
		this.expense_id = expense_id
		this.tag_id = tag_id
	}
}
ExpenseTag.prototype.tablename = tablename
module.exports = ExpenseTag
module.exports.tablename = tablename
