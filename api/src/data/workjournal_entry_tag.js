var Data = require("../data")
/*
 * @property id: Id of a single tag binding
 * @property entry_id: Id of the entry to be bound
 * @property tag_id: Id of the tag to be bound
 */
export const tablename = 'workjournal_entry_tag'
export default class WorkjournalEntryTag {
	constructor(id, entry_id, tag_id){
		this.id = id
		this.entry_id = entry_id
		this.tag_id = tag_id
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

WorkjournalEntryTag.Delete     = Data.Delete.bind(WorkjournalEntryTag.Delete)
WorkjournalEntryTag.prototype.tablename = tablename
WorkjournalEntryTag.Page       = Data.Page.bind(WorkjournalEntryTag.Page)
WorkjournalEntryTag.List       = Data.List.bind(WorkjournalEntryTag.List)
WorkjournalEntryTag.Save       = Data.Save.bind(WorkjournalEntryTag.Save)
WorkjournalEntryTag.Sync       = Data.Sync.bind(WorkjournalEntryTag.Sync)
WorkjournalEntryTag.Search     = Data.Search.bind(WorkjournalEntryTag.Search)
WorkjournalEntryTag.Update     = Data.Update.bind(WorkjournalEntryTag.Update)
