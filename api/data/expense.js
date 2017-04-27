/*
 * @property id: The id of the expense
 * @property name: A max 64 character long name of the expense/bill
 * @property description: A max 300 character long description of the expense/bill
 */
class Expense {
	constructor(id, name, description){
		this.id = id
		this.name = name
		this.description = description
	}
}
module.exports = Expense
module.exports.tableName = 'expense'
