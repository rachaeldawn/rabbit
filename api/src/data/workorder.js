var Data = require("../data")
/*
 * @property id: The Id of a specific workorder
 * @property customer_id: The customer_id attached to the workorder
 * @property rep_id: The id of the employee that opened the workorder
 * @property open_date: Timestamp that defaults to now 
 */
const tablename = 'workorder'
class Workorder {
	constructor(id, customer_id, rep_id, open_date){
		this.id = id
		this.customer_id = customer_id
		this.rep_id = rep_id
		this.open_date = open_date
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Workorder.prototype.tablename = tablename
Workorder.Delete = Data.Delete.bind(Workorder.Delete)
Workorder.Page = Data.Page.bind(Workorder.Page)
Workorder.List = Data.List.bind(Workorder.List)
Workorder.Save = Data.Save.bind(Workorder.Save)
Workorder.Sync = Data.Sync.bind(Workorder.Sync)
Workorder.Search = Data.Search.bind(Workorder.Search)
Workorder.Update = Data.Update.bind(Workorder.Update)
module.exports = Workorder
module.exports.tablename = tablename
