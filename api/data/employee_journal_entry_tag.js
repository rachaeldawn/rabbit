/*
 * @property id: Id of a single tag binding
 * @property entry_id: Id of the entry to be bound
 * @property tag_id: Id of the tag to be bound
 */
class EmployeeJournalEntryTag {
	constructor(id, entry_id, tag_id){
		this.id = id
		this.entry_id = entry_id
		this.tag_id = tag_id
	}
}
module.exports = EmployeeJournalEntryTag
module.exports.tableName = 'employee_journal_entry_tag'
