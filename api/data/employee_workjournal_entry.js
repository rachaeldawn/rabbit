/*
 * @property id: Id of a single entry
 * @property journal_id: Id of the workjournal this entry belongs in
 * @property message: The message in the work journal. Must be at least 15 characters.
 * @property time_stamp: Default of NOW(), timestamp of when the journal was created. This is not updateable.
 * @property workday_id: Id of a workday, in case an employee wishes to tag what they're working on for payroll purposes.
 */
class EmployeeWorkjournalEntry {
	constructor(id, journal_id, message, time_stamp, workday_id){
		this.id = id
		this.journal_id = journal_id
		this.message = message
		this.time_stamp = time_stamp
		this.workday_id = workday_id
		this.tablename = 'employee_workjournal_entry'
	}
}
module.exports = EmployeeWorkjournalEntry
