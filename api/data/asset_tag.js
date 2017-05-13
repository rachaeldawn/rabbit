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
	}
}
AssetTag.prototype.tablename = tablename
module.exports = AssetTag
module.exports.tablename = tablename
