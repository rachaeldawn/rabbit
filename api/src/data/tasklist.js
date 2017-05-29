var Data = require("../data")
/*
 * @property id: The id of the entry of the tasklist
 * @property board_id: The id of the board this tasklist belongs to
 * @property name: A 255 character long tasklist name (the card title)
 */
export const tablename = 'tasklist'
export default class Tasklist {
	constructor(id, board_id, name){
		this.id = id
		this.board_id = board_id
		this.name = name
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Tasklist.Delete     = Data.Delete.bind(Tasklist.Delete)
Tasklist.prototype.tablename = tablename
Tasklist.Page       = Data.Page.bind(Tasklist.Page)
Tasklist.List       = Data.List.bind(Tasklist.List)
Tasklist.Save       = Data.Save.bind(Tasklist.Save)
Tasklist.Sync       = Data.Sync.bind(Tasklist.Sync)
Tasklist.Search     = Data.Search.bind(Tasklist.Search)
Tasklist.Update     = Data.Update.bind(Tasklist.Update)
