import Estimate from "../data/estimate"
import EstimateContact from "../data/estimate_contact"
import Customer from "../data/customer"
import CustomerContact from "../data/customer_contact"
import EstimateItem from "../data/estimate_item"
import {default as User} from "../data/user_account"
import Service from "../data/service"
import * as LockController from "./lock"


/*
 * Exported Functions: 
 * 	CreateEstimate: Creates an estimate. Allows customers to see what things should cost before they commit.
 * 	LockEstimate: Locks estimate. Alias for lock
 * 	ReleaseLock: Release the lock on an estimate
 * 	AddItem: Adds an item to the estimate
 * 	RemoveItem: Removes an item from an estimate
 * 	SetValidityPeriod: Sets the validity period of the estimate. Must be greater than 0
 * 	GetEstimate: Gets a populated estimate
 * 	AddContact: Adds a contact to the estimate
 * 	RemoveContact: Removes a contact from the estimate
 * Private Functions: 
 */
/*
 * Purpose: Creates an estimate. Allows customers to see what things should cost before they commit.
 * @param customer: The id or Customer object the estimate is for (default: undefined)
 * @param user: The id or User object creating the estimate (default: undefined)
 * @param validity_period: A positive integer  (default: 14)
 * @param items: An array of service Ids or service objects to add to the estimate. Optional parameter (default: null)
 */
export function CreateEstimate(customer: number|Customer , user: number|User , validity_period: number  = 14, items: Service[] ) {
	throw 'Not implemented'
}
/*
 * Purpose: Locks estimate. Alias for lock
 * @param estimate: The id or Estimate object to lock (default: undefined)
 * @param user: The id or User object locking the estimate (default: undefined)
 */
export function LockEstimate(estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Release the lock on an estimate
 * @param estimate: The id or Estimate object to release from lock (default: undefined)
 * @param user: The id or User object releasing the lock (default: undefined)
 */
export function ReleaseLock(estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Adds an item to the estimate
 * @param service: The id or Service object to add to the invoice (default: undefined)
 * @param estimate: The id or Estimate object to add to the invoice (default: undefined)
 * @param user: The id or user object adding to the invoice (default: undefined)
 */
export function AddItem(service: number|Service , estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes an item from an estimate
 * @param item: The id or EstimateItem object to remove (default: undefined)
 * @param estimate: The id or estimate object to have the item removed (default: undefined)
 * @param user: The user object removing the item from the estimate (default: undefined)
 */
export function RemoveItem(item: number|EstimateItem , estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets the validity period of the estimate. Must be greater than 0
 * @param period: How many days the estimate is valid for after opening (default: undefined)
 * @param estimate: The id or estimate object to have the period set (default: undefined)
 * @param user: The user setting the estimate period (default: undefined)
 */
export function SetValidityPeriod(period: number , estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a populated estimate
 * @param estimate: The id or estimate object to work with (default: undefined)
 * @param user: The id or user object requesting the estimate (default: undefined)
 */
export function GetEstimate(estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Adds a contact to the estimate
 * @param contact: The id or CustomerContact object to add to the estimate (default: undefined)
 * @param estimate: The id or estimate object to add the contact to (default: undefined)
 * @param user: The user adding the contact to the estimate (default: undefined)
 */
export function AddContact(contact: number|CustomerContact , estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a contact from the estimate
 * @param contact: The id or WorkorderContact object to remove from the estimate (default: undefined)
 * @param estimate: The id or Estimate object to remove the contact from (default: undefined)
 * @param user: The id or user object removing the contact (default: undefined)
 */
export function RemoveContact(contact: number|EstimateContact , estimate: number|Estimate , user: number|User ) {
	throw 'Not implemented'
}


