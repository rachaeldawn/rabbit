var Data = require("../data")
/*
 * @property id: Id of the asset binding
 * @property asset_id: The id of the asset to be bound with the tag
 * @property tag_id: The id of the tag to be bound
 */
const tablename = 'asset_tag'
class AssetTag {
	constructor(id, asset_id, tag_id){
		this.id = id
		this.asset_id = asset_id
		this.tag_id = tag_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

AssetTag.prototype.tablename = tablename
AssetTag.Delete = Data.Delete.bind(AssetTag.Delete)
AssetTag.Page = Data.Page.bind(AssetTag.Page)
AssetTag.List = Data.List.bind(AssetTag.List)
AssetTag.Save = Data.Save.bind(AssetTag.Save)
AssetTag.Sync = Data.Sync.bind(AssetTag.Sync)
AssetTag.Search = Data.Search.bind(AssetTag.Search)
AssetTag.Update = Data.Update.bind(AssetTag.Update)
module.exports = AssetTag
module.exports.tablename = tablename
