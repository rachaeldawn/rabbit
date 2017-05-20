(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Data = require("../data");
    /*
     * @property id: Id of the asset binding
     * @property asset_id: The id of the asset to be bound with the tag
     * @property tag_id: The id of the tag to be bound
     */
    exports.tablename = 'asset_tag';
    var AssetTag = (function () {
        function AssetTag(id, asset_id, tag_id) {
            this.id = id;
            this.asset_id = asset_id;
            this.tag_id = tag_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return AssetTag;
    }());
    exports["default"] = AssetTag;
    AssetTag.Delete = Data.Delete.bind(AssetTag.Delete);
    AssetTag.prototype.tablename = exports.tablename;
    AssetTag.Page = Data.Page.bind(AssetTag.Page);
    AssetTag.List = Data.List.bind(AssetTag.List);
    AssetTag.Save = Data.Save.bind(AssetTag.Save);
    AssetTag.Sync = Data.Sync.bind(AssetTag.Sync);
    AssetTag.Search = Data.Search.bind(AssetTag.Search);
    AssetTag.Update = Data.Update.bind(AssetTag.Update);
});
