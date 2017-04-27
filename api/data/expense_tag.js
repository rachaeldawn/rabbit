/*
 * @property id: The id of the tag-expense pair
 * @property expense_id: The id of the expense to be tagged
 * @property tag_id: The tag id to be bound
 */
class ExpenseTag {
	constructor(id, expense_id, tag_id){
		this.id = id
		this.expense_id = expense_id
		this.tag_id = tag_id
	}
}
module.exports = ExpenseTag
module.exports.tableName = 'expense_tag'
