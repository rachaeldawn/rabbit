var Data = require("../data")
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
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Customer.prototype.tablename = tablename
Customer.Delete = Data.Delete.bind(Customer.Delete)
Customer.Page = Data.Page.bind(Customer.Page)
Customer.List = Data.List.bind(Customer.List)
Customer.Save = Data.Save.bind(Customer.Save)
Customer.Sync = Data.Sync.bind(Customer.Sync)
Customer.Search = Data.Search.bind(Customer.Search)
Customer.Update = Data.Update.bind(Customer.Update)
module.exports = Customer
module.exports.tablename = tablename
