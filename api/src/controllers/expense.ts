import Bill from "../data/bill"
import Expense from "../data/expense"
import {default as User} from "../data/user_account"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	CreateExpense: Creates a new expense
 * 	CreateBill: Creates a new bill of an expense
 * 	GetExpense: Gets a single expense
 * 	GetBill: Gets a single bill object
 * 	ListExpenses: Gets a list of expenses
 * 	ListBills: Gets a list of bills, regardless of which expense they belong to
 * 	PageExpenses: Gets a page of expenses
 * 	PageBills: Gets a page of bills
 * 	AdjustBill: Updates a bill object by negating the one specified, and adding the new one
 * 	UpdateExpense: Updates the information in an expense object
 * 	DeactivateExpense: Sets an expense to inactive. Alias for SetExpenseActive=false
 * 	ActivateExpense: Sets an expense to active. Alias for SetExpenseIsActive=true
 * 	SetExpenseIsActive: Sets an expense to active/inactive based on input
 * Private Functions: 
 */
/*
 * Purpose: Creates a new expense
 * @param name: Max 64 character long name of the expense (default: undefined)
 * @param description: Max 300 character long description of expense/bill (default: undefined)
 * @param user: The id or User object attempting to add the expense (default: undefined)
 * @param isActive: Whether or not the bill is currently active. Default true. (default: true)
 */
export function CreateExpense(name: string , description: string , user: number|User , isActive: boolean  = true) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a new bill of an expense
 * @param expense: The id or Expense object this bill is for (default: undefined)
 * @param amt: The amount in dollars this bill comes to (default: undefined)
 * @param billing_date: The date this bill occurs on. Default now. (default: undefined)
 * @param user: The id or User object attempting to create the new bill  (default: undefined)
 */
export function CreateBill(expense: number|Expense , amt: number , billing_date: Date , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single expense
 * @param expense: The expense to get (default: undefined)
 * @param user: The user requesting the expense (default: undefined)
 */
export function GetExpense(expense: number|Expense , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single bill object
 * @param bill: The bill object to lookup and get (default: undefined)
 * @param user: The user requesting the bill object (default: undefined)
 */
export function GetBill(bill: number|Bill , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of expenses
 * @param amt: The quantity of expenses to return (Max 100) (default: undefined)
 * @param user: The id or User object requesting the expenses (default: undefined)
 */
export function ListExpenses(amt: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of bills, regardless of which expense they belong to
 * @param amt: The amount of bills to return (max 100) (default: undefined)
 * @param user: The id or User object requesting the bills (default: undefined)
 * @param expense: The optional id or Expense the bills are to belong to (default: -1)
 */
export function ListBills(amt: number , user: number|User , expense: number|Expense  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of expenses
 * @param amt: The quantity of expenses to return (default: undefined)
 * @param page: Which page to get (start point 1) (default: undefined)
 * @param user: The id of User object requesting the page (default: undefined)
 */
export function PageExpenses(amt: number , page: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of bills
 * @param amt: The amount to retrieve (page size, max 100) (default: undefined)
 * @param page: The page to get (starting 1) (default: undefined)
 * @param user: The Id or User requesting the page (default: undefined)
 * @param expense: The optional id or Expense object to retrieve a page of bills for (default: -1)
 */
export function PageBills(amt: number , page: number , user: number|User , expense: number|Expense  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a bill object by negating the one specified, and adding the new one
 * @param bill: The bill to negate (default: undefined)
 * @param obj: The update object. Supports fields (date/billing_date, amount, expense_id/expense[object]) (default: undefined)
 * @param user: The user trying to update the bill (default: undefined)
 */
export function AdjustBill(bill: number|Bill , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates the information in an expense object
 * @param expense: The id or expense object to update (default: undefined)
 * @param obj: The update object. Supports name, description, is_active (default: undefined)
 * @param user: The  id or User object updating the expense (default: undefined)
 */
export function UpdateExpense(expense: number|Expense , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets an expense to inactive. Alias for SetExpenseActive=false
 * @param expense: The id or Expense object to set to inactive (default: undefined)
 * @param user: The id or User object setting the expense to inactive (default: undefined)
 */
export function DeactivateExpense(expense: number|Expense , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets an expense to active. Alias for SetExpenseIsActive=true
 * @param expense: The id or Expense object to set to active (default: undefined)
 * @param user: The id or User object setting the expense to active (default: undefined)
 */
export function ActivateExpense(expense: number|Expense , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets an expense to active/inactive based on input
 * @param expense: The id or Expense object to set the status of (default: undefined)
 * @param user: The id or User object setting the expense status (default: undefined)
 * @param status: What to set the activity state to (default: undefined)
 */
export function SetExpenseIsActive(expense: number|Expense , user: number|User , status: boolean ) {
	throw 'Not implemented'
}


