import CustomerContact from "../data/customer_contact"
import {default as User} from "../data/user_account"
import Customer from "../data/customer"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	CreateCustomer: Create a new customer. Required fields name, mailing address, postal code, country, phone number.
 * 	UpdateCustomer: Updates a customer object
 * 	GetCustomer: Gets a single customer object
 * 	ListCustomer: Gets a list of customers. Alias for PageCustomer(page = 1)
 * 	PageCustomer: Gets a page of customers
 * 	CreateContact: Creates a contact for a customer (does not create user)
 * 	GetContact: Gets a single contact
 * 	ListContacts: Gets a list of contacts. Alias for PageContacts (page = 1)
 * 	PageContacts: Retrieves a page of customer contacts
 * 	UpdateContact: Updates a single contact
 * 	DeleteContact: Sets a contact to deleted
 * Private Functions: 
 */
/*
 * Purpose: Create a new customer. Required fields name, mailing address, postal code, country, phone number.
 * @param objOrName: A customer object or string (default: undefined)
 * @param phone: The phone number of the company (default: undefined)
 * @param mailingAddress: The mailing address of the customer (default: undefined)
 * @param mailingPostalCode: The mailing postal code of the customer (default: undefined)
 * @param mailingCountry: The country of the mailing address (default: undefined)
 * @param physicalAddress: The physical address of the company (default: null)
 * @param physicalPostalCode: The physical address' postal code of the company (default: undefined)
 * @param physicalCountry: The physical country of the company (default: undefined)
 * @param token: The token created by an employee to validate registration (default: undefined)
 */
export function CreateCustomer(objOrName: Customer|string , phone: number , mailingAddress: string , mailingPostalCode: string , mailingCountry: string , physicalAddress: string , physicalPostalCode: string , physicalCountry: string , token: string ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a customer object
 * @param cust: The id or Customer object to update (default: undefined)
 * @param obj: The update object. Supports fields company_name/name, mailing_address/mailingAddress, mailing_postal_code/mailingPostalCode, mailing_country/mailingCountry, physical_address/physicalAddress, physical_postal_code/physicalPostalCode, physical_country/physicalCountry, phone/phoneNumber (default: undefined)
 * @param user: The user updating the customer (default: undefined)
 */
export function UpdateCustomer(cust: number|Customer , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single customer object
 * @param cust: The id or Customer object to retrieve (default: undefined)
 * @param user: The id or User object requesting the customer (default: undefined)
 */
export function GetCustomer(cust: number|Customer , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of customers. Alias for PageCustomer(page = 1)
 * @param amt: The amount of customers to get (max 100) (default: undefined)
 * @param user: The id or User object to retrieve (default: undefined)
 * @param populated: Whether or not to also include the contacts in the listing (default: false)
 */
export function ListCustomer(amt: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of customers
 * @param amt: The amount of customers to get (default: undefined)
 * @param page: The page number to get (starting point 1) (default: undefined)
 * @param user: The id or User object requesting the page (default: undefined)
 * @param populated: Whether or not the result should also include contacts (default: undefined)
 */
export function PageCustomer(amt: number , page: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a contact for a customer (does not create user)
 * @param customer: The customer that the contact belongs to (default: undefined)
 * @param firstName: The first name of the contact (default: undefined)
 * @param lastName: The last name of the customer (default: undefined)
 * @param phone: The phone number for this contact (default: undefined)
 * @param ext: The extension the contact can be reached at (optional) (default: -1)
 * @param about: An optional description of the customer (default: )
 * @param user: The user creating the contact (default: undefined)
 */
export function CreateContact(customer: number|User , firstName: string , lastName: string , phone: string , ext: number  = -1, about: string , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single contact
 * @param contact: The id or CustomerContact to request (default: undefined)
 * @param user: The user requesting the contact (default: undefined)
 */
export function GetContact(contact: number|CustomerContact , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of contacts. Alias for PageContacts (page = 1)
 * @param amt: The amount of contacts to retrieve (default: undefined)
 * @param user: The id or User object requesting the listing (default: undefined)
 * @param customer: The id or Customer object to get the list of contacts for (default: -1)
 */
export function ListContacts(amt: number , user: number|User , customer: number|Customer  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Retrieves a page of customer contacts
 * @param amt: The amount of customer contacts to retrieve (default: undefined)
 * @param page: The page number of contacts to retrieve (starting point 1) (default: undefined)
 * @param user: The id or User object requesting the page of contacts (default: undefined)
 * @param customer: The id or Customer object the contacts are to belong to (default: -1)
 */
export function PageContacts(amt: number , page: number , user: number|User , customer: number|Customer  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a single contact
 * @param contact: The id or CustomerContact to update (default: undefined)
 * @param obj: The update object. Supports fields first_name/firstName, last_name/lastName, phone/phone_number/phoneNumber, ext/extension (default: undefined)
 * @param user: The id or User object attempting to update the contact (default: undefined)
 */
export function UpdateContact(contact: number|CustomerContact , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets a contact to deleted
 * @param contact: The id or CustomerContact object to be set to deleted (default: undefined)
 * @param user: The id or User object deleting the customer contact (default: undefined)
 */
export function DeleteContact(contact: number|CustomerContact , user: number|User ) {
	throw 'Not implemented'
}


