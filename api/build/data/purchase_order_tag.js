/*
 * @property id: The Id of the purchase order that this tag is attached to.
 * @property tag_id: The id of the tag to be bound
 */
var tablename = 'purchase_order_tag';
var PurchaseOrderTag = (function () {
    function PurchaseOrderTag(id, tag_id) {
        this.id = id;
        this.tag_id = tag_id;
    }
    return PurchaseOrderTag;
}());
PurchaseOrderTag.prototype.tablename = tablename;
module.exports = PurchaseOrderTag;
module.exports.tablename = tablename;
//# sourceMappingURL=purchase_order_tag.js.map