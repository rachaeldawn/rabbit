"use strict";
exports.__esModule = true;
var AssetTag = (function () {
    function AssetTag(id, asset_id, tag_id) {
        this.tablename = 'asset_tag';
        this.id = id;
        this.asset_id = asset_id;
        this.tag_id = tag_id;
    }
    return AssetTag;
}());
exports["default"] = AssetTag;
AssetTag.prototype.tablename = 'asset_tag';
