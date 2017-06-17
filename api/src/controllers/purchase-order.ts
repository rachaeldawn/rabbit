import PurchaseOrder from "../data/purchase_order"
import PurchaseOrderItem from "../data/purchase_order_item"
import {default as User} from "../data/user_account"
import Tag from "../data/tag"
import * as Data from "../data"
import * as LockController from "./lock"


/*
 * Exported Functions: 
 * 	CreatePurchaseOrder: Creates a new purchase order
 * 	AddItem: Creates a new item, and adds it to the workorder.
 * 	RemoveItem: Removes an item from the purchase order
 * 	GetPurchaseOrder: Gets a single purchase order object
 * 	UpdateItem: Updates an item on a purchase order
 * 	UpdateMemo: Updates the memo of a purchase order
 * 	ListPurchaseOrders: Gets a list of purchase orders
 * 	LockPurchaseOrder: Request for locking a purchase order
 * 	ReleaseLock: Release a lock on a purchase order
 * 	PagePurchaseOrders: Gets a page of purchase orders
 * 	DeletePurchaseOrder: Deletes a purchase order 
 * Private Functions: 
 */
/*
 * Purpose: Creates a new purchase order
 * @param user: The id or user object requesting the creation of the PO (default: undefined)
 * @param memo: A max 400 character memo for the purchase order (default: undefined)
 * @param ... tags: Optional tags to add to the purchase order (default: undefined)
 */
export function CreatePurchaseOrder(user: number|User , memo: string , ... tags: Tag[] ) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a new item, and adds it to the workorder.
 * @param name: The SKU of the item to be purchased (default: undefined)
 * @param description: Max 360 characters, description of item to be purchased (default: undefined)
 * @param quantity: How many of the thing to buy (default: undefined)
 * @param price: The price of the thing to buy (default: undefined)
 * @param po: The id or purchase order object to add the item to (default: undefined)
 * @param user: The id or user object to add this item to (default: undefined)
 */
export function AddItem(name: string , description: string , quantity: number , price: number , po: number|PurchaseOrder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes an item from the purchase order
 * @param poItem: The id or PurchaseOrderItem object to be removed (default: undefined)
 * @param purchaseOrder: The id or purchase order object to have the item removed from (default: undefined)
 * @param user: The id or User object removing the item (default: undefined)
 */
export function RemoveItem(poItem: number|PurchaseOrderItem , purchaseOrder: number|PurchaseOrder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single purchase order object
 * @param po: The id or PurchaseOrder object to retrieve (default: undefined)
 * @param user: The id or User object retrieving the object (default: undefined)
 */
export function GetPurchaseOrder(po: number|PurchaseOrder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates an item on a purchase order
 * @param poitem: The id or PurchaseOrderItem object to update (default: undefined)
 * @param updateobj: The object used to update the PurchaseOrderItem (default: undefined)
 * @param user: The id or User object attempting to update the object (default: undefined)
 */
export function UpdateItem(poitem: number|PurchaseOrderItem , updateobj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates the memo of a purchase order
 * @param memo: The new memo (default: undefined)
 * @param po: The PO to update (default: undefined)
 * @param user: The id or User object updating the memo (default: undefined)
 */
export function UpdateMemo(memo: string , po: number|PurchaseOrder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of purchase orders
 * @param amt: The amount of purchase orders to get (max 100) (default: undefined)
 * @param user: The id or User object requesting the purchase orders (default: undefined)
 */
export function ListPurchaseOrders(amt: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Request for locking a purchase order
 * @param workorder: The id or Workorder object to lock (default: undefined)
 * @param user: The id or User object requesting the lock (default: undefined)
 */
export function LockPurchaseOrder(workorder: number|PurchaseOrder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Release a lock on a purchase order
 * @param po: The id or Purchase Order object to release the lock on (default: undefined)
 * @param user: The id or User object attempting to release the lock (default: undefined)
 */
export function ReleaseLock(po: number|PurchaseOrder , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of purchase orders
 * @param amt: The amount of purchase orders to get in a page (default: undefined)
 * @param page: The page number to get (start point 1) (default: undefined)
 * @param user: The id or User object requesting the purchase orders (default: undefined)
 */
export function PagePurchaseOrders(amt: number , page: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes a purchase order 
 * @param po: The id or purchase order object to be deleted (default: undefined)
 * @param user: The id or User object deleting the purchase order (default: undefined)
 * @param force: Whether or not to force deletion (deletes all items) (default: false)
 */
export function DeletePurchaseOrder(po: number|PurchaseOrder , user: number|User , force: boolean ) {
	throw 'Not implemented'
}


