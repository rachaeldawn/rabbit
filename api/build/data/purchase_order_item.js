var Data = require("../data");
/*
 * @property id: The Id of the item on a purchase order
 * @property purchase_order_id: The Id of the purchase order
 * @property name: The SKU of the item to be purchased
 * @property description: A description of the item. Max 360 characters.
 * @property quantity: The amount of the item to be purchased in the quantity * price equation
 * @property price: The price of the item to be purchased in the quantity * price equation
 */
var tablename = 'purchase_order_item';
var PurchaseOrderItem = (function () {
    function PurchaseOrderItem(id, purchase_order_id, name, description, quantity, price) {
        this.id = id;
        this.purchase_order_id = purchase_order_id;
        this.name = name;
        this.description = description;
        this.quantity = quantity;
        this.price = price;
        this.Update = Data.Update.bind(this.Update, this);
        this.Sync = Data.Sync.bind(this.Sync, this);
        this.Save = Data.Save.bind(this.Save, this);
        this.Delete = Data.Delete.bind(this.Delete, this);
    }
    return PurchaseOrderItem;
}());
PurchaseOrderItem.prototype.tablename = tablename;
PurchaseOrderItem.Delete = Data.Delete.bind(PurchaseOrderItem.Delete);
PurchaseOrderItem.Page = Data.Page.bind(PurchaseOrderItem.Page);
PurchaseOrderItem.List = Data.List.bind(PurchaseOrderItem.List);
PurchaseOrderItem.Save = Data.Save.bind(PurchaseOrderItem.Save);
PurchaseOrderItem.Sync = Data.Sync.bind(PurchaseOrderItem.Sync);
PurchaseOrderItem.Search = Data.Search.bind(PurchaseOrderItem.Search);
PurchaseOrderItem.Update = Data.Update.bind(PurchaseOrderItem.Update);
module.exports = PurchaseOrderItem;
module.exports.tablename = tablename;
//# sourceMappingURL=purchase_order_item.js.map