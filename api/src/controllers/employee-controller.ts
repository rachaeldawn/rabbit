import Employee from "../models/employee"
import {default as User} from "../models/user_account"
import {default as Workday} from "../models/employee_workday"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	ClockIn: Clock an employee in
 * 	ClockOut: Clock an employee out
 * 	AddEmployee: Creates a new employee
 * 	GetEmployee: Gets a single employee (checks cache first)
 * 	GetEmployeeFromUser: Gets an employee object
 * 	FireEmployee: Fires an employee
 * 	LoadEmployees: Caches all employees into memory for easy lookup. Only active employees.
 * 	CacheEmployee: Adds an employee to the cache after creating a new employee
 * 	UncacheEmployee: Removes an employee that has been fired from the cache
 * 	ListEmployees: Gets a list of active employees (max 100). Binding to Page, with page = 1
 * 	PageEmployees: Gets a page of active employees
 * Private Functions: 
 */
/*
 * Purpose: Clock an employee in
 * @param user: The id or user object of the employee clocking in (default: undefined)
 */
export function ClockIn(user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Clock an employee out
 * @param user: The id or user object of the employee clocking out (default: undefined)
 */
export function ClockOut(user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a new employee
 * @param employeeOrFirstName: Either an employee object (ignores other params), or a string for the first name (default: undefined)
 * @param middle: The middle name of the employee (default: undefined)
 * @param last: The last name of the employee (default: undefined)
 * @param phone: The phone number of the employee (default: undefined)
 * @param address: The home address of the employee (default: undefined)
 * @param postal_code: The postal code of the employee (default: undefined)
 * @param sin: A 9 character long string for the employee's SIN (default: undefined)
 * @param birthday: The birthdate of the employee (default: undefined)
 * @param is_active: Whether or not the employee is to be set as active right now (default: false)
 * @param about: The about for the employee (default: null)
 * @param user: The id or user object to be linked (default: undefined)
 */
export function AddEmployee(employeeOrFirstName: Employee|string, middle: string, last: string, phone: string, address: string, postal_code: string, sin: string, birthday: Date, is_active: boolean = false, about: string, user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single employee (checks cache first)
 * @param employee: The id or Employee object. Fills Employee object and returns, or returns Employee object. (default: undefined)
 * @param user: The user requesting the employee object (default: undefined)
 * @param confidentials: Whether or not to include confidential information in the populated object (default: undefined)
 */
export function GetEmployee(employee: number|Employee, user: number|user, confidentials: boolean) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets an employee object
 * @param employee: The User to get the employee from (default: undefined)
 */
export function GetEmployeeFromUser(employee: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Fires an employee
 * @param employee: The employee to set as inactive (default: undefined)
 * @param user: The user firing the employee. Used for permission checking. (default: undefined)
 */
export function FireEmployee(employee: number|Employee, user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Caches all employees into memory for easy lookup. Only active employees.
 */
export function LoadEmployees() {
	throw 'Not implemented'
}
/*
 * Purpose: Adds an employee to the cache after creating a new employee
 * @param employee: A populated, valid, employee object (default: undefined)
 */
export function CacheEmployee(employee: Employee) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes an employee that has been fired from the cache
 * @param employee: The employee object to remove from the cache (default: undefined)
 */
export function UncacheEmployee(employee: number|Employee) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of active employees (max 100). Binding to Page, with page = 1
 * @param amt: The amount to return (default: undefined)
 * @param user: The user requesting the listing (default: undefined)
 * @param includeInactive: Whether or not to include the inactive employees (default: false)
 * @param confidentials: Whether or not to return the confidential information (default: false)
 */
export function ListEmployees(amt: number, user: number|User, includeInactive: boolean = false, confidentials: boolean = false) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of active employees
 * @param amt: The amount to return (default: undefined)
 * @param page: The page number to return (start point 1) (default: undefined)
 * @param user: The user requesting the listing (default: undefined)
 * @param includeInactive: Whether or not to include the inactive employees (default: false)
 * @param confidentials: Whether or not to return the confidential information (default: false)
 */
export function PageEmployees(amt: number, page: number, user: number|User, includeInactive: boolean = false, confidentials: boolean = false) {
	throw 'Not implemented'
}


