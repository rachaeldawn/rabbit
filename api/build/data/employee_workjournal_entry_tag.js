/*
 * @property id: Id of a single tag binding
 * @property entry_id: Id of the entry to be bound
 * @property tag_id: Id of the tag to be bound
 */
var tablename = 'employee_workjournal_entry_tag';
var EmployeeWorkjournalEntryTag = (function () {
    function EmployeeWorkjournalEntryTag(id, entry_id, tag_id) {
        this.id = id;
        this.entry_id = entry_id;
        this.tag_id = tag_id;
    }
    return EmployeeWorkjournalEntryTag;
}());
EmployeeWorkjournalEntryTag.prototype.tablename = tablename;
module.exports = EmployeeWorkjournalEntryTag;
module.exports.tablename = tablename;
//# sourceMappingURL=employee_workjournal_entry_tag.js.map