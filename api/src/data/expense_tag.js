var Data = require("../data")
/*
 * @property id: The id of the tag-expense pair
 * @property expense_id: The id of the expense to be tagged
 * @property tag_id: The tag id to be bound
 */
export const tablename = 'expense_tag'
export default class ExpenseTag {
	constructor(id, expense_id, tag_id){
		this.id = id
		this.expense_id = expense_id
		this.tag_id = tag_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

ExpenseTag.Delete     = Data.Delete.bind(ExpenseTag.Delete)
ExpenseTag.prototype.tablename = tablename
ExpenseTag.Page       = Data.Page.bind(ExpenseTag.Page)
ExpenseTag.List       = Data.List.bind(ExpenseTag.List)
ExpenseTag.Save       = Data.Save.bind(ExpenseTag.Save)
ExpenseTag.Sync       = Data.Sync.bind(ExpenseTag.Sync)
ExpenseTag.Search     = Data.Search.bind(ExpenseTag.Search)
ExpenseTag.Update     = Data.Update.bind(ExpenseTag.Update)
