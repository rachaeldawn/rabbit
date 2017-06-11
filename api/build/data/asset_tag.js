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
    exports.tablename = 'asset_tag';
    var AssetTag = (function () {
        function AssetTag(id, asset_id, tag_id) {
            this.id = id;
            this.asset_id = asset_id;
            this.tag_id = tag_id;
        }
        return AssetTag;
    }());
    exports["default"] = AssetTag;
});
