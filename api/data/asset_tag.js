class AssetTag {
    constructor(asset_id, tag_id) {
        this.id = -1
        this.asset_id = asset_id
        this.tag_id = tag_id
    }
}

module.exports = AssetTag
module.exports.tableName = 'asset_tag '