import Workorder from "../data/workorder"
import WorkorderContact from "../data/workorder_contact"
import CustomerContact from "../data/customer_contact"
import WorkorderTransaction from "../data/workorder_transaction"
import Transaction from "../data/transaction"
import {default as User} from "../data/user_account"
import Estimate from "../data/estimate"
import WorkorderItem from "../data/workorder_item"
import Service from "../data/service"
import Customer from "../data/customer"


/*
 * Exported Functions: 
 * 	CreateWorkorder: Creates an invoice for use
 * 	RequestWorkorderLock: Requests a lock for read/write on a workorder. The workorder id is the dictionary key
 * 	IsWorkorderLocked: Checks whether or not the workorder is locked
 * 	ReleaseWorkorderLock: Release the lock on a workorder object
 * 	AddToWorkorder: Adds an item to the workorder
 * 	RemoveFromWorkorder: Removes a service from a workorder
 * 	CloseWorkorder: Closes a workorder that is currently open.
 * 	AddWorkorderContact: Adds a contact to a workorder
 * 	RemoveWorkorderContact: Removes a contact from a workorder
 * 	AddTransaction: Adds a transaction to a workorder
 * 	ConvertEstimateToWorkorder: Converts an estimate into a workorder
 * 	GetWorkorder: Gets a workorder
 * 	ListWorkorders: Gets a list of Workorders. Alias for PageWorkorders(page = 1)
 * 	PageWorkorders: Gets a page of workorders.
 * Private Functions: 
 */
/*
 * Purpose: Creates an invoice for use
 * @param customer: The id or customer object for the invoice (default: undefined)
 * @param employee: The id or the user object to look up the employee for (default: undefined)
 */
export function CreateWorkorder(customer: number|Customer , employee: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Requests a lock for read/write on a workorder. The workorder id is the dictionary key
 * @param workorder: The id or workorder object to request the lock for (default: undefined)
 * @param user: The id or user object requesting the lock (default: undefined)
 */
export function RequestWorkorderLock(workorder: number|Workorder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Checks whether or not the workorder is locked
 * @param workorder: The workorder to check (default: undefined)
 * @param user:  (default: undefined)
 */
export function IsWorkorderLocked(workorder: number|Workorder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Release the lock on a workorder object
 * @param lock: The workorder id that is locked (default: undefined)
 * @param user: The user releasing the workorder lock (default: undefined)
 */
export function ReleaseWorkorderLock(lock: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Adds an item to the workorder
 * @param service: The service to add to the workorder (default: undefined)
 * @param workorder: The workorder to add the service to (default: undefined)
 * @param quantity: The amount of the service to add to the workorder (default: undefined)
 * @param user: The id or user object adding to the invoice (default: undefined)
 */
export function AddToWorkorder(service: number|Service , workorder: number|Workorder , quantity: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a service from a workorder
 * @param item: The workorder item to remove from the invoice (default: undefined)
 * @param workorder: The workorder to remove the item from (default: undefined)
 * @param user: The user trying to remove the item (default: undefined)
 */
export function RemoveFromWorkorder(item: number|WorkorderItem , workorder: number|Workorder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Closes a workorder that is currently open.
 * @param workorder: The id or Workorder object to be closed (default: undefined)
 * @param user: The id or User object attempting to close the workorder (default: undefined)
 */
export function CloseWorkorder(workorder: number|Workorder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Adds a contact to a workorder
 * @param contact: The id or Contact object to be added to the workorder (default: undefined)
 * @param workorder: The workorder to add the contact to (default: undefined)
 * @param user: The id or user adding the contact (default: undefined)
 */
export function AddWorkorderContact(contact: number|CustomerContact , workorder: number|Workorder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a contact from a workorder
 * @param contact: The id or contact object to remove from the workorder (default: undefined)
 * @param workorder: The id or workorder object to remove the contact from (default: undefined)
 * @param user: The user removing the contact from the board (default: undefined)
 */
export function RemoveWorkorderContact(contact: number|WorkorderContact , workorder: number|Workorder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Adds a transaction to a workorder
 * @param transaction: The transaction object (default: undefined)
 * @param workorder: The workorder to add the transaction to (default: undefined)
 * @param contact: The contact that authorized the transaction (default: undefined)
 */
export function AddTransaction(transaction: number|Transaction , workorder: number|Workorder , contact: number|CustomerContact ) {
	throw 'Not implemented'
}
/*
 * Purpose: Converts an estimate into a workorder
 * @param estimate: The id or Estimate object to convert (default: undefined)
 * @param user: The id or user object requesting the conversion (default: undefined)
 */
export function ConvertEstimateToWorkorder(estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a workorder
 * @param workorder: The id or workorder object to retrieve (default: undefined)
 * @param user: The user requesting the workorder (default: undefined)
 * @param populated: Whether or not he workorders should also have items, transactions, contacts, etc (default: false)
 */
export function GetWorkorder(workorder: number|Workorder , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of Workorders. Alias for PageWorkorders(page = 1)
 * @param amt: The amount of workorders to get (max 100) (default: undefined)
 * @param user: The id or User object requesting the listing (default: undefined)
 * @param populated: Whether or not the workorders should also have items, transactions, contacts, etc (default: false)
 */
export function ListWorkorders(amt: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of workorders.
 * @param amt: The amount of workorders to get (max 100) (default: undefined)
 * @param page: The page number to get (starting point 1) (default: undefined)
 * @param user: The id or User object requesting the workorders (default: undefined)
 * @param populated: Whether or not he workorders should also have items, transactions, contacts, etc (default: false)
 */
export function PageWorkorders(amt: number , page: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}


