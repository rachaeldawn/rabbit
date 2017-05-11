/*
 * @property id: Id of the service entry
 * @property name: A max 64 character long code for the service. (SKU)
 * @property description: A max 360 character long description of what the service is. 
 * @property price: The default price to be used in the price * quantity equation.
 * @property default_quantity: The default quantity of the service to be used in the price * quantity equation.
 */
const tablename = 'service'
class Service {
	constructor(id, name, description, price, default_quantity){
		this.id = id
		this.name = name
		this.description = description
		this.price = price
		this.default_quantity = default_quantity
		this.tablename = 'service'
	}
}
Service.prototype.tablename = 'service'
module.exports = Service
module.exports.tablename = tablename
