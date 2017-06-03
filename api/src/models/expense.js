/*
 * @property id: The id of the expense
 * @property name: A max 64 character long name of the expense/bill
 * @property description: A max 300 character long description of the expense/bill
 * @property is_active: Whether or not the expense is still current.
 */
export const tablename = 'expense'
export default class Expense {
	constructor(id, name, description, is_active){
		this.id = id
		this.name = name
		this.description = description
		this.is_active = is_active
	}
}

