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
	}
}
EmployeeWorkjournalEntryTag.prototype.tablename = tablename
module.exports = EmployeeWorkjournalEntryTag
module.exports.tablename = tablename
