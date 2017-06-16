import Service from "../data/service"
import {default as User} from "../data/user_account"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	CreateService: Creates a new service
 * 	GetService: Gets a single service
 * 	ListServices: Gets a list of services alphabetically ordered. Bind to default.
 * 	PageServices: Gets a page of services. Bind to default.
 * 	UpdateService: Updates a service object.
 * 	ArchiveService: Sets a service to archived. Alias for SetServiceArchive = true
 * 	UnarchiveService: Sets a service to active. Alias for SetServiceArchived = false
 * 	SetServiceArchived: Sets whether or not the service is archived
 * Private Functions: 
 */
/*
 * Purpose: Creates a new service
 * @param nameOrService: The name of the service, or new service object (default: undefined)
 * @param description: The description of the service (default: undefined)
 * @param price: The price of the service (default: undefined)
 * @param default_quantity: The default quantity of the service (default: undefined)
 * @param user: The user adding the service (default: undefined)
 */
export function CreateService(nameOrService: string|Service , description: string , price: number , default_quantity: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single service
 * @param svc: The id or service object to retrieve (default: undefined)
 * @param user: The id or user object requesting the service (default: undefined)
 */
export function GetService(svc: number|Service , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of services alphabetically ordered. Bind to default.
 * @param amt: The quantity to return. Max 100. (default: undefined)
 * @param user: The user requesting the services listing (default: undefined)
 */
export function ListServices(amt: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of services. Bind to default.
 * @param amt: The amout per page to get (default: undefined)
 * @param page: The page number (starting at 1) to get (default: undefined)
 * @param user: The user requesting the services listing (default: undefined)
 */
export function PageServices(amt: number , page: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a service object.
 * @param service: The id or service object to update (default: undefined)
 * @param obj: The update object. Accepts description, price, and default_quantity (default: undefined)
 * @param user: The user id or object requesting an update on the service (default: undefined)
 */
export function UpdateService(service: number|Service , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets a service to archived. Alias for SetServiceArchive = true
 * @param service: The id or service object to set to archived (default: undefined)
 * @param user: The id or User object archiving the service (default: undefined)
 */
export function ArchiveService(service: number|Service , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets a service to active. Alias for SetServiceArchived = false
 * @param service: The id or Service object to remove from archive (default: undefined)
 * @param user: The id or User object removing the object from the archive (default: undefined)
 */
export function UnarchiveService(service: number|Service , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets whether or not the service is archived
 * @param service: The id or Service object to set the archive status on (default: undefined)
 * @param user: The user object setting the archive status (default: undefined)
 * @param status: Whether or not the object is to be archived (default: undefined)
 */
export function SetServiceArchived(service: number|Service , user: number|User , status: boolean ) {
	throw 'Not implemented'
}


