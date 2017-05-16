var Data = require("../data")
/*
 * @property id: The id of the entry on the estimate
 * @property estimate_id: The id of the estimate this is attached to
 * @property service_id: The id of the service that is being offered
 * @property quantity: The amount of the item estimated in the quantity * price equation
 */
const tablename = 'estimate_item'
class EstimateItem {
	constructor(id, estimate_id, service_id, quantity){
		this.id = id
		this.estimate_id = estimate_id
		this.service_id = service_id
		this.quantity = quantity
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

EstimateItem.prototype.tablename = tablename
EstimateItem.Delete = Data.Delete.bind(EstimateItem.Delete)
EstimateItem.Page = Data.Page.bind(EstimateItem.Page)
EstimateItem.List = Data.List.bind(EstimateItem.List)
EstimateItem.Save = Data.Save.bind(EstimateItem.Save)
EstimateItem.Sync = Data.Sync.bind(EstimateItem.Sync)
EstimateItem.Search = Data.Search.bind(EstimateItem.Search)
EstimateItem.Update = Data.Update.bind(EstimateItem.Update)
module.exports = EstimateItem
module.exports.tablename = tablename
