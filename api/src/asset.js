const lodash = require("lodash")
const data = require("../data")
const Asset = require("../data/asset")
const AssetTag = require("../data/asset_tag")



/*
 * Class: Assets
 * 	Purpose: Serves as a complex class for the tables asset and asset_tag
 * 	Parameters: name, description, purchase_value, serial_key = undefined, tags = undefined
 * 	Functions: 
 * 		Create: To create new Asset objects and load them into the Database
 * 		Update: To update an existing Asset object with new fields
 * 		Search: To search for assets
 * 		List: Lists X assets (max 100)
 * 		Page: Lists X assets on Y page, skipping (X * (Y - 1))
 * 		Tag: To add tags to an asset
 * 		Untag: To remove tags from an asset
 * 		Privacy: To get the private in generator working
 */
class Assets {
	constructor(name, description, purchase_value, serial_key = undefined, tags = undefined) {
		this.Create = this.Create.bind(this, this)
		this.Update = this.Update.bind(this, this)
		this.Search = this.Search.bind(this, this)
		this.List = this.List.bind(this, this)
		this.Page = this.Page.bind(this, this)
		this.Tag = this.Tag.bind(this, this)
		this.Untag = this.Untag.bind(this, this)
		this.Privacy = Privacy.bind(this)
	}
	/*
	 * 	Purpose: To create new Asset objects and load them into the Database
	 * 	    @param name: Name of the asset to create and add to the database. Generally short, and not reading-friendly
	 * 	    @param desc: Reading friendly description of what the asset is
	 * 	    @param purVal: The original purchase price of the asset acquired
	 * 	    @param serKey: The optional serial key that is associated with the Asset
	 * 	    @param tags: The tags of the asset to be created
	 */
	static Create(name, desc, purVal, serKey, tags) {
		throw 'Not implemented'
	}
	/*
	 * 	Purpose: To update an existing Asset object with new fields
	 * 	    @param obj: The object to operate on
	 * 	    @param name: New name for the asset. Undefined for no change
	 * 	    @param desc: New description for the asset. Undefined for no change
	 * 	    @param purVal: New original purchase price of the asset acquired
	 * 	    @param serKey: New serial key for the object
	 * 	    @param tags: New tags for the object. Missing tags are to be removed
	 */
	static Update(obj, name, desc, purVal, serKey, tags) {
		throw 'Not implemented'
	}
	/*
	 * 	Purpose: To search for assets
	 * 	    @param searchObj: The search object takes the form { field: { value: '', *optional* exact: true/false} } where field is id/key, name, desc/description, serial/serialkey
	 */
	static Search(searchObj) {
		throw 'Not implemented'
	}
	/*
	 * 	Purpose: Lists X assets (max 100)
	 * 	    @param amt: Undefined for 25, or amt for amount to list
	 * 	    @param ascending: false for most recent, true for oldest (default: false)
	 */
	static List(amt, ascending = false) {
		throw 'Not implemented'
	}
	/*
	 * 	Purpose: Lists X assets on Y page, skipping (X * (Y - 1))
	 * 	    @param amt: The amount of Assets (with tags attached) to return (max 100)
	 * 	    @param page: How many pages of assets to skip
	 * 	    @param ascending: false for most recent, true for oldest (default: false)
	 */
	static Page(amt, page, ascending = false) {
		throw 'Not implemented'
	}
	/*
	 * 	Purpose: To add tags to an asset
	 * 	    @param obj: The object to operate on
	 * 	    @param tags: A single tag, or an array of tags.
	 */
	static Tag(obj, tags) {
		throw 'Not implemented'
	}
	/*
	 * 	Purpose: To remove tags from an asset
	 * 	    @param obj: The object to operate on
	 * 	    @param tags: A single tag, or an array of tags.
	 */
	static Untag(obj, tags) {
		throw 'Not implemented'
	}
}


function Privacy() {
	throw 'Not implemented'
}


module.exports = Assets
