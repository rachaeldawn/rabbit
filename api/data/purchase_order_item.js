/*
 * @property id: The Id of the item on a purchase order
 * @property purchase_order_id: The Id of the purchase order 
 * @property name: The SKU of the item to be purchased
 * @property description: A description of the item. Max 360 characters.
 * @property quantity: The amount of the item to be purchased in the quantity * price equation
 * @property price: The price of the item to be purchased in the quantity * price equation
 */
class PurchaseOrderItem {
	constructor(id, purchase_order_id, name, description, quantity, price){
		this.id = id
		this.purchase_order_id = purchase_order_id
		this.name = name
		this.description = description
		this.quantity = quantity
		this.price = price
	}
}
module.exports = PurchaseOrderItem
module.exports.tableName = 'purchase_order_item'
