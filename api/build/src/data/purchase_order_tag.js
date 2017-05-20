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
     * @property id: The Id of the purchase order that this tag is attached to.
     * @property tag_id: The id of the tag to be bound
     */
    exports.tablename = 'purchase_order_tag';
    var PurchaseOrderTag = (function () {
        function PurchaseOrderTag(id, tag_id) {
            this.id = id;
            this.tag_id = tag_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return PurchaseOrderTag;
    }());
    exports["default"] = PurchaseOrderTag;
    PurchaseOrderTag.Delete = Data.Delete.bind(PurchaseOrderTag.Delete);
    PurchaseOrderTag.prototype.tablename = exports.tablename;
    PurchaseOrderTag.Page = Data.Page.bind(PurchaseOrderTag.Page);
    PurchaseOrderTag.List = Data.List.bind(PurchaseOrderTag.List);
    PurchaseOrderTag.Save = Data.Save.bind(PurchaseOrderTag.Save);
    PurchaseOrderTag.Sync = Data.Sync.bind(PurchaseOrderTag.Sync);
    PurchaseOrderTag.Search = Data.Search.bind(PurchaseOrderTag.Search);
    PurchaseOrderTag.Update = Data.Update.bind(PurchaseOrderTag.Update);
});
