

/*
 * Exported Functions: 
 * 	Create: To create new objects and load them into the Database
 * 	Sync: To pull a single object of a type from the database if valid, or updating a locally cached object
 * 	Update: To update an existing object with new fields
 * 	Search: To search for object
 * 	List: Lists X objects (max 100)
 * 	Page: Lists X objects on Y page, skipping (X * (Y - 1))
 * 	Tag: To add tags to an asset
 * 	Untag: To remove tags from an asset
 * 	GetTags: To get tags on a class that supports them
 * 	Delete: Delete objects from the database that are NOT accounting-related
 * Private Functions: 
 */
/*
 * Purpose: To create new objects and load them into the Database
 * @param obj: The object to operate on
 */
function Create(obj) {
	throw 'Not implemented'
}
/*
 * Purpose: To pull a single object of a type from the database if valid, or updating a locally cached object
 * @param obj: The object to operate on
 */
function Sync(obj) {
	throw 'Not implemented'
}
/*
 * Purpose: To update an existing object with new fields
 * @param obj: The object to operate on
 * @param newParams: A table following the { field: newValue, } format. Fields are: name, desc/description, purVal/purchase_value, serial/serial_key, tags
 */
function Update(obj, newParams) {
	throw 'Not implemented'
}
/*
 * Purpose: To search for object
 * @param objClass: The class to search for
 * @param searchObj: The search object takes the form { field: { value: '', *optional* exact: true/false} } where field is id/key, name, desc/description, serial/serialkey
 */
function Search(objClass, searchObj) {
	throw 'Not implemented'
}
/*
 * Purpose: Lists X objects (max 100)
 * @param objClass: The class type to list
 * @param amt: Undefined for 25, or amt for amount to list
 * @param ascending: false for most recent, true for oldest (default: false)
 */
function List(objClass, amt, ascending = false) {
	throw 'Not implemented'
}
/*
 * Purpose: Lists X objects on Y page, skipping (X * (Y - 1))
 * @param amt: The amount of objects (with tags attached when appropriate) to return (max 100)
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
/*
 * Purpose: To get tags on a class that supports them
 * @param obj: The object (with id set) to add a .Tags field to
 */
function GetTags(obj) {
	throw 'Not implemented'
}
/*
 * Purpose: Delete objects from the database that are NOT accounting-related
 * @param obj: The object (with id set) to delete
 */
function Delete(obj) {
	throw 'Not implemented'
}


module.exports.Create = Create
module.exports.Sync = Sync
module.exports.Update = Update
module.exports.Search = Search
module.exports.List = List
module.exports.Page = Page
module.exports.Tag = Tag
module.exports.Untag = Untag
module.exports.GetTags = GetTags
module.exports.Delete = Delete
