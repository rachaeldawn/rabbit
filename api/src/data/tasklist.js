var Data = require("../data")
/*
 * @property id: The id of the entry of the tasklist
 * @property board_id: The id of the board this tasklist belongs to
 */
const tablename = 'tasklist'
class Tasklist {
	constructor(id, board_id){
		this.id = id
		this.board_id = board_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Tasklist.prototype.tablename = tablename
Tasklist.Delete = Data.Delete.bind(Tasklist.Delete)
Tasklist.Page = Data.Page.bind(Tasklist.Page)
Tasklist.List = Data.List.bind(Tasklist.List)
Tasklist.Save = Data.Save.bind(Tasklist.Save)
Tasklist.Sync = Data.Sync.bind(Tasklist.Sync)
Tasklist.Search = Data.Search.bind(Tasklist.Search)
Tasklist.Update = Data.Update.bind(Tasklist.Update)
module.exports = Tasklist
module.exports.tablename = tablename
