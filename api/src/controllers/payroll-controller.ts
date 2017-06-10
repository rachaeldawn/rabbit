import {default as User} from "../models/user_account"
import Payroll from "../models/payroll"
import PayrollItem from "../models/payroll_item"
import PayrollTransaction from "../models/payroll_transaction"
import PayPeriod from "../models/pay_period"
import Employee from "../models/employee"


/*
 * Exported Functions: 
 * 	CreatePeriod: Creates a new pay period for clocking use
 * 	CreatePayroll: Creates a Payroll instance for a single employee
 * 	AddPayrollItem: Add an item to a payroll for an employee
 * Private Functions: 
 */
/*
 * Purpose: Creates a new pay period for clocking use
 * @param start_date: When the pay period starts (default: undefined)
 * @param end_date: When the pay period ends (default: undefined)
 * @param payday: When the employee is to be paid (default: undefined)
 * @param user: The optional id or user object asking for a new pay period. (default: null)
 */
export function CreatePeriod(start_date: Date, end_date: Date, payday: Date, user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a Payroll instance for a single employee
 * @param empl: The id or Employee object to create the payroll for (default: undefined)
 * @param period: The id or PayPeriod object to add the user to. (default: undefined)
 * @param ... items: The array of payroll items to add. (usage: Salary, automated bonus, etc) (default: null)
 */
export function CreatePayroll(empl: number|Employee, period: number|PayPeriod, ... items: Array<PayrollItem>) {
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
export function AddPayrollItem(payroll: number|Payroll, name: string, amt: number, quan: number, user: number|User = -1) {
	throw 'Not implemented'
}


