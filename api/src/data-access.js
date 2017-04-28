


/*
 * Exported Functions: 
 * 	Create: To create new objects and load them into the Database
 * 	Update: To update an existing Asset object with new fields
 * 	Search: To search for assets
 * 	List: Lists X assets (max 100)
 * 	Page: Lists X assets on Y page, skipping (X * (Y - 1))
 * 	Tag: To add tags to an asset
 * 	Untag: To remove tags from an asset
 * Private Functions: 
 */
/*
 * Purpose: To create new objects and load them into the Database
 * @param name: Name of the asset to create and add to the database. Generally short, and not reading-friendly
 * @param desc: Reading friendly description of what the asset is
 * @param purVal: The original purchase price of the asset acquired
 * @param serKey: The optional serial key that is associated with the Asset
 * @param tags: The tags of the asset to be created
 */
function Create(name, desc, purVal, serKey, tags) {
	throw 'Not implemented'
}
/*
 * Purpose: To update an existing Asset object with new fields
 * @param obj: The object to operate on
 * @param newParams: A table following the { field: newValue, } format. Fields are: name, desc/description, purVal/purchase_value, serial/serial_key, tags
 */
function Update(obj, newParams) {
	throw 'Not implemented'
}
/*
 * Purpose: To search for assets
 * @param searchObj: The search object takes the form { field: { value: '', *optional* exact: true/false} } where field is id/key, name, desc/description, serial/serialkey
 */
function Search(searchObj) {
	throw 'Not implemented'
}
/*
 * Purpose: Lists X assets (max 100)
 * @param amt: Undefined for 25, or amt for amount to list
 * @param ascending: false for most recent, true for oldest (default: false)
 */
function List(amt, ascending = false) {
	throw 'Not implemented'
}
/*
 * Purpose: Lists X assets on Y page, skipping (X * (Y - 1))
 * @param amt: The amount of Assets (with tags attached) to return (max 100)
 * @param page: How many pages of assets to skip
 * @param ascending: false for most recent, true for oldest (default: false)
 */
function Page(amt, page, ascending = false) {
	throw 'Not implemented'
}
/*
 * Purpose: To add tags to an asset
 * @param obj: The object to operate on
 * @param tags: A single tag, or an array of tags.
 */
function Tag(obj, tags) {
	throw 'Not implemented'
}
/*
 * Purpose: To remove tags from an asset
 * @param obj: The object to operate on
 * @param tags: A single tag, or an array of tags.
 */
function Untag(obj, tags) {
	throw 'Not implemented'
}


module.exports.Create = Create
module.exports.Update = Update
module.exports.Search = Search
module.exports.List = List
module.exports.Page = Page
module.exports.Tag = Tag
module.exports.Untag = Untag
