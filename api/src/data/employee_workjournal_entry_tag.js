var Data = require("../data")
/*
 * @property id: Id of a single tag binding
 * @property entry_id: Id of the entry to be bound
 * @property tag_id: Id of the tag to be bound
 */
const tablename = 'employee_workjournal_entry_tag'
class EmployeeWorkjournalEntryTag {
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

EmployeeWorkjournalEntryTag.prototype.tablename = tablename
EmployeeWorkjournalEntryTag.Delete = Data.Delete.bind(EmployeeWorkjournalEntryTag.Delete)
EmployeeWorkjournalEntryTag.Page = Data.Page.bind(EmployeeWorkjournalEntryTag.Page)
EmployeeWorkjournalEntryTag.List = Data.List.bind(EmployeeWorkjournalEntryTag.List)
EmployeeWorkjournalEntryTag.Save = Data.Save.bind(EmployeeWorkjournalEntryTag.Save)
EmployeeWorkjournalEntryTag.Sync = Data.Sync.bind(EmployeeWorkjournalEntryTag.Sync)
EmployeeWorkjournalEntryTag.Search = Data.Search.bind(EmployeeWorkjournalEntryTag.Search)
EmployeeWorkjournalEntryTag.Update = Data.Update.bind(EmployeeWorkjournalEntryTag.Update)
module.exports = EmployeeWorkjournalEntryTag
module.exports.tablename = tablename
