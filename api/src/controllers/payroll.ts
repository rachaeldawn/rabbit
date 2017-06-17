import {default as User} from "../data/user_account"
import Payroll from "../data/payroll"
import PayrollItem from "../data/payroll_item"
import PayrollTransaction from "../data/payroll_transaction"
import PayPeriod from "../data/pay_period"
import Employee from "../data/employee"
import * as Data from "../data"
import * as LockController from "./lock"


/*
 * Exported Functions: 
 * 	CreatePeriod: Creates a new pay period for clocking use
 * 	CreatePayroll: Creates a Payroll instance for a single employee
 * 	AddPayrollItem: Add an item to a payroll for an employee
 * 	RemovePayrollItem: Removes a payroll item from a payroll instance
 * 	UpdatePayrollItem: Updates a payroll item
 * 	UpdatePayPeriod: Update a pay period's date range or pay date
 * 	GetPayPeriod: Gets a single pay period
 * 	GetPayroll: Gets a single payroll object
 * 	ListPayPeriod: Gets a list of max 100 of the most recent pay periods
 * 	ListPayroll: Gets a list of max 100 payroll objects
 * 	PagePayPeriod: Gets a page of Pay Periods
 * 	PagePayroll: Gets a page of Payroll objects
 * 	LockPayroll: Locks a payroll object to a single user
 * 	ReleasePayroll: Releases the payroll object from lock
 * Private Functions: 
 */
/*
 * Purpose: Creates a new pay period for clocking use
 * @param start_date: When the pay period starts (default: undefined)
 * @param end_date: When the pay period ends (default: undefined)
 * @param payday: When the employee is to be paid (default: undefined)
 * @param user: The optional id or user object asking for a new pay period. (default: null)
 */
export function CreatePeriod(start_date: Date , end_date: Date , payday: Date , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a Payroll instance for a single employee
 * @param empl: The id or Employee object to create the payroll for (default: undefined)
 * @param period: The id or PayPeriod object to add the user to. (default: undefined)
 * @param ... items: The array of payroll items to add. (usage: Salary, automated bonus, etc) (default: null)
 */
export function CreatePayroll(empl: number|Employee , period: number|PayPeriod , ... items: PayrollItem[] ) {
	throw 'Not implemented'
}
/*
 * Purpose: Add an item to a payroll for an employee
 * @param payroll: The id or Payroll object to add the item to (default: undefined)
 * @param name: A max 50 character length name of the transaction (Eg: REGULAR-1.0-HRLY) (default: undefined)
 * @param amt: The amount of the money being paid/deducted ($x/quantity) (default: undefined)
 * @param quan: The quantity of the amount to be paid/deducted ($x/quantity) (default: undefined)
 * @param user: The id or User object adding the item. Optional. (default: -1)
 */
export function AddPayrollItem(payroll: number|Payroll , name: string , amt: number , quan: number , user: number|User  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a payroll item from a payroll instance
 * @param item: The id or payroll item to remove (default: undefined)
 * @param user: The id or User removing the payroll item (default: -1)
 */
export function RemovePayrollItem(item: number|PayrollItem , user: number|User  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a payroll item
 * @param item: The payroll item to be updated (default: undefined)
 * @param obj: The update object itself. Supports name, amount, and quantity. (default: undefined)
 * @param user: The user attempting to update the payroll item (default: undefined)
 */
export function UpdatePayrollItem(item: number|PayrollItem , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Update a pay period's date range or pay date
 * @param period: The id or PayPeriod object to update (default: undefined)
 * @param obj: Object with fields start_date, end_date, and/or pay_date (default: undefined)
 * @param user: The id or User object attempting the update (default: undefined)
 */
export function UpdatePayPeriod(period: number|PayPeriod , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single pay period
 * @param period: The pay period to get the information of (default: undefined)
 * @param user: The id or User object requesting the pay period (default: undefined)
 * @param populated: Indicates whether or not the Pay Period object is to be filled with all related Payroll objects (default: false)
 */
export function GetPayPeriod(period: number|PayPeriod , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single payroll object
 * @param payroll: The id or Payroll object to retrieve (default: undefined)
 * @param user: The id or User object requesting the payroll item (default: undefined)
 * @param populated: Whether or not the Payroll object should be filled with its items. (default: false)
 */
export function GetPayroll(payroll: number|Payroll , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of max 100 of the most recent pay periods
 * @param amt: The quantity of results to get (default: undefined)
 * @param user: The id or User object requesting the list (default: undefined)
 * @param populated: Whether or not the pay periods should also be filled with populated payroll objects (default: undefined)
 */
export function ListPayPeriod(amt: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of max 100 payroll objects
 * @param amt: The amount to retrieve (default: undefined)
 * @param user: The id or User object requesting the list of Payroll objects (default: undefined)
 * @param populated: Whether or not the returned list should be populated with items (default: false)
 */
export function ListPayroll(amt: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of Pay Periods
 * @param amt: The page amount to get (default: undefined)
 * @param page: The page number to get (starting at 1) (default: undefined)
 * @param user: The id or User object requesting a page of Pay Periods (default: undefined)
 * @param populated: Whether or not the returned results should be populated with Payroll objects (that are also populated) (default: false)
 */
export function PagePayPeriod(amt: number , page: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of Payroll objects
 * @param amt: The amount in a page of Payroll objects to get (default: undefined)
 * @param page: The page skip offset (start point 1) (default: undefined)
 * @param user: The id or User object requesting the page (default: undefined)
 * @param populated: Whether or not the results should be populated with Items as well (default: false)
 */
export function PagePayroll(amt: number , page: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Locks a payroll object to a single user
 * @param payroll: The id or Payroll object to lock (default: undefined)
 * @param user: The id or User object requesting the lock (default: undefined)
 */
export function LockPayroll(payroll: number|Payroll , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Releases the payroll object from lock
 * @param payroll: The id or Payroll object to release (default: undefined)
 * @param user: The id or User object releasing the payroll object from lock (default: undefined)
 */
export function ReleasePayroll(payroll: number|Payroll , user: number|User ) {
	throw 'Not implemented'
}


