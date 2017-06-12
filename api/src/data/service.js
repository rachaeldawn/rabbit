/*
 * @property id: Id of the service entry
 * @property name: A max 64 character long code for the service. (SKU)
 * @property description: A max 360 character long description of what the service is. 
 * @property price: The default price to be used in the price * quantity equation.
 * @property default_quantity: The default quantity of the service to be used in the price * quantity equation.
 * @property is_archived: Whether or not the service is still able to be used. Default false.
 */
export const tablename = 'service'
export default class Service {
	constructor(id, name, description, price, default_quantity, is_archived){
		this.id = id
		this.name = name
		this.description = description
		this.price = price
		this.default_quantity = default_quantity
		this.is_archived = is_archived
	}
}

