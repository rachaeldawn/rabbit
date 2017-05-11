/*
 * @property id: The Id of the asset to be tracked
 * @property name: A 64 character name of the asset being tracked. Must be unique.
 * @property description: A max 340 character description of the asset
 * @property purchase_value: What the asset cost to purchase
 * @property serial_key: An optional string for the serial, or serial key, that was purchased.
 */
const tablename = 'asset'
class Asset {
	constructor(id, name, description, purchase_value, serial_key){
		this.id = id
		this.name = name
		this.description = description
		this.purchase_value = purchase_value
		this.serial_key = serial_key
		this.tablename = 'asset'
	}
}
Asset.prototype.tablename = 'asset'
module.exports = Asset
module.exports.tablename = tablename
