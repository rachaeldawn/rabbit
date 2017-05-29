var Data = require("../data")
/*
 * @property id: The Id of the transaction (1-1 relation). No support for multiple tags on a transaction.
 * @property tag_id: The bound tag Id
 */
export const tablename = 'transaction_tag'
export default class TransactionTag {
	constructor(id, tag_id){
		this.id = id
		this.tag_id = tag_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

TransactionTag.Delete     = Data.Delete.bind(TransactionTag.Delete)
TransactionTag.prototype.tablename = tablename
TransactionTag.Page       = Data.Page.bind(TransactionTag.Page)
TransactionTag.List       = Data.List.bind(TransactionTag.List)
TransactionTag.Save       = Data.Save.bind(TransactionTag.Save)
TransactionTag.Sync       = Data.Sync.bind(TransactionTag.Sync)
TransactionTag.Search     = Data.Search.bind(TransactionTag.Search)
TransactionTag.Update     = Data.Update.bind(TransactionTag.Update)