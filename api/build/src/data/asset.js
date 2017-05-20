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
     * @property id: The Id of the asset to be tracked
     * @property name: A 64 character name of the asset being tracked. Must be unique.
     * @property description: A max 340 character description of the asset
     * @property purchase_value: What the asset cost to purchase
     * @property serial_key: An optional string for the serial, or serial key, that was purchased.
     */
    exports.tablename = 'asset';
    var Asset = (function () {
        function Asset(id, name, description, purchase_value, serial_key) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.purchase_value = purchase_value;
            this.serial_key = serial_key;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Asset;
    }());
    exports["default"] = Asset;
    Asset.Delete = Data.Delete.bind(Asset.Delete);
    Asset.prototype.tablename = exports.tablename;
    Asset.Page = Data.Page.bind(Asset.Page);
    Asset.List = Data.List.bind(Asset.List);
    Asset.Save = Data.Save.bind(Asset.Save);
    Asset.Sync = Data.Sync.bind(Asset.Sync);
    Asset.Search = Data.Search.bind(Asset.Search);
    Asset.Update = Data.Update.bind(Asset.Update);
});
