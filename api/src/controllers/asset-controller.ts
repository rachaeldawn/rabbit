import Asset from "../data/asset"
import {default as User} from "../data/user_account"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	CreateAsset: Creates a new asset
 * 	GetAsset: Gets a single asset
 * 	ListAsset: Gets a list of assets. Alias for PageAssets(page = 1)
 * 	PageAsset: Gets a page of assets
 * 	UpdateAsset: Updates an asset object
 * 	SetAssetArchived: Sets the archived status of an asset
 * 	ArchiveAsset: Sets an asset to be archived. Alias for SetAssetArchived (status=true)
 * 	UnarchiveAsset: Removes an asset from archived. Alias for SetAssetArchived(status=false)
 * Private Functions: 
 */
/*
 * Purpose: Creates a new asset
 * @param name: The name of the asset to be added (default: undefined)
 * @param description: The description of the asset (default: undefined)
 * @param purchaseValue: Represents how much the asset was purchased for (default: undefined)
 * @param serial: The serial key (optional) (default: undefined)
 * @param user: The id or User object creating the asset (default: undefined)
 */
export function CreateAsset(name: string , description: string , purchaseValue: number , serial: string , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single asset
 * @param asset: The id or Asset to retrieve (default: undefined)
 * @param user: The id or User object requesting the asset (default: undefined)
 */
export function GetAsset(asset: number|Asset , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of assets. Alias for PageAssets(page = 1)
 * @param amt: The amount to retrieve (default: undefined)
 * @param user: The id or User object requesting the asset listing (default: undefined)
 */
export function ListAsset(amt: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of assets
 * @param amt: The amount to retrieve in a page (default: undefined)
 * @param page: The page number to get (starting point 1) (default: undefined)
 * @param user: The id or User object requesting the page (default: undefined)
 */
export function PageAsset(amt: number , page: number , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates an asset object
 * @param asset: The id or Asset object to update (default: undefined)
 * @param obj: The update object. Supports fields name, desc/description, purchase_value/purchaseValue, serial/serialKey/serial_key (default: undefined)
 * @param user: The id or User object requesting the update (default: undefined)
 */
export function UpdateAsset(asset: number|Asset , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets the archived status of an asset
 * @param asset: The id or Asset object to set the archived of (default: undefined)
 * @param user: The id or User object requesting the archival/removal from archive (default: undefined)
 * @param status: Whether or not the asset is to be archived (default: undefined)
 */
export function SetAssetArchived(asset: number|Asset , user: number|User , status: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets an asset to be archived. Alias for SetAssetArchived (status=true)
 * @param asset: The id or Asset object to be archived (default: undefined)
 * @param user: The id or User object setting the archival (default: undefined)
 */
export function ArchiveAsset(asset: number|Asset , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes an asset from archived. Alias for SetAssetArchived(status=false)
 * @param asset: The id or Asset to remove from archive (default: undefined)
 * @param user: The id or User removing the object from the archive (default: undefined)
 */
export function UnarchiveAsset(asset: number|Asset , user: number|User ) {
	throw 'Not implemented'
}


