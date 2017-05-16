var Data = require("../data");
/*
 * @property id: Id of a single entry
 * @property journal_id: Id of the workjournal this entry belongs in
 * @property message: The message in the work journal. Must be at least 15 characters.
 * @property time_stamp: Default of NOW(), timestamp of when the journal was created. This is not updateable.
 * @property workday_id: Id of a workday, in case an employee wishes to tag what they're working on for payroll purposes.
 */
var tablename = 'employee_workjournal_entry';
var EmployeeWorkjournalEntry = (function () {
    function EmployeeWorkjournalEntry(id, journal_id, message, time_stamp, workday_id) {
        this.id = id;
        this.journal_id = journal_id;
        this.message = message;
        this.time_stamp = time_stamp;
        this.workday_id = workday_id;
        this.Update = Data.Update.bind(this.Update, this);
        this.Sync = Data.Sync.bind(this.Sync, this);
        this.Save = Data.Save.bind(this.Save, this);
        this.Delete = Data.Delete.bind(this.Delete, this);
    }
    return EmployeeWorkjournalEntry;
}());
EmployeeWorkjournalEntry.prototype.tablename = tablename;
EmployeeWorkjournalEntry.Delete = Data.Delete.bind(EmployeeWorkjournalEntry.Delete);
EmployeeWorkjournalEntry.Page = Data.Page.bind(EmployeeWorkjournalEntry.Page);
EmployeeWorkjournalEntry.List = Data.List.bind(EmployeeWorkjournalEntry.List);
EmployeeWorkjournalEntry.Save = Data.Save.bind(EmployeeWorkjournalEntry.Save);
EmployeeWorkjournalEntry.Sync = Data.Sync.bind(EmployeeWorkjournalEntry.Sync);
EmployeeWorkjournalEntry.Search = Data.Search.bind(EmployeeWorkjournalEntry.Search);
EmployeeWorkjournalEntry.Update = Data.Update.bind(EmployeeWorkjournalEntry.Update);
module.exports = EmployeeWorkjournalEntry;
module.exports.tablename = tablename;
//# sourceMappingURL=employee_workjournal_entry.js.map