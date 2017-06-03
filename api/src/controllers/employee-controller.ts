import Employee from "../data/employee"
import {default as User} from "../data/user_account"
import {default as Workday} from "../data/employee_workday"


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
 */
export function GetEmployee(employee: number|Employee) {
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


