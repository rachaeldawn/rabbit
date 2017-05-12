/*
 * @property id: Identifier for a Customer
 * @property company_name: Name of the customer company
 * @property mailing_address: Mailing address of customer company
 * @property mailing_postal_code: Mailing address postal code of customer company
 * @property mailing_country: Default country is Canada. This will need updating if we are to expand beyond Canada.
 * @property physical_address: Null to match mailing address, or physical address of customer company.
 * @property physical_postal_code: Null to match mailing address, or physical address postal code of customer company
 * @property physical_country: Null to match mailing address, or physical address country of customer company
 * @property phone: Full phone number of customer company
 * @property start_date: The date and time that the customer's account is created
 */
const tablename = 'customer'
class Customer {
	constructor(id, company_name, mailing_address, mailing_postal_code, mailing_country, physical_address, physical_postal_code, physical_country, phone, start_date){
		this.id = id
		this.company_name = company_name
		this.mailing_address = mailing_address
		this.mailing_postal_code = mailing_postal_code
		this.mailing_country = mailing_country
		this.physical_address = physical_address
		this.physical_postal_code = physical_postal_code
		this.physical_country = physical_country
		this.phone = phone
		this.start_date = start_date
	}
}
Customer.prototype.tablename = tablename
module.exports = Customer
module.exports.tablename = tablename
