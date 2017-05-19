var Data = require("../data")
/*
 * @property id: Id of  this specific entry
 * @property estimate_id: The id of the estimate this is attached to
 * @property contact_id: The id of the contact that we are working with
 */
export const tablename = 'estimate_contact'
export default class EstimateContact {
	constructor(id, estimate_id, contact_id){
		this.id = id
		this.estimate_id = estimate_id
		this.contact_id = contact_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

EstimateContact.Delete     = Data.Delete.bind(EstimateContact.Delete)
EstimateContact.prototype.tablename = tablename
EstimateContact.Page       = Data.Page.bind(EstimateContact.Page)
EstimateContact.List       = Data.List.bind(EstimateContact.List)
EstimateContact.Save       = Data.Save.bind(EstimateContact.Save)
EstimateContact.Sync       = Data.Sync.bind(EstimateContact.Sync)
EstimateContact.Search     = Data.Search.bind(EstimateContact.Search)
EstimateContact.Update     = Data.Update.bind(EstimateContact.Update)
