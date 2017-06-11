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
    exports.tablename = 'purchase_order_tag';
    var PurchaseOrderTag = (function () {
        function PurchaseOrderTag(id, tag_id) {
            this.id = id;
            this.tag_id = tag_id;
        }
        return PurchaseOrderTag;
    }());
    exports["default"] = PurchaseOrderTag;
});
