"use strict";
exports.__esModule = true;
exports.tablename = 'journal_entry';
var JournalEntry = (function () {
    function JournalEntry(id, journal_id, message, time_stamp, workday_id) {
        this.id = id;
        this.journal_id = journal_id;
        this.message = message;
        this.time_stamp = time_stamp;
        this.workday_id = workday_id;
    }
    return JournalEntry;
}());
exports["default"] = JournalEntry;
