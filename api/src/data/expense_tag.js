/*
 * @property id: The id of the tag-expense pair
 * @property expense_id: The id of the expense to be tagged
 * @property tag_id: The tag id to be bound
 */
export default class ExpenseTag {
	constructor(id, expense_id, tag_id){
	this.tablename = 'expense_tag'
		this.id = id
		this.expense_id = expense_id
		this.tag_id = tag_id
	}
}

ExpenseTag.prototype.tablename = 'expense_tag'
