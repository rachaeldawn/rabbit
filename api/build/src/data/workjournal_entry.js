(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Data = require("../data");
    /*
     * @property id: Id of a single entry
     * @property journal_id: Id of the workjournal this entry belongs in
     * @property message: The message in the work journal. Must be at least 15 characters.
     * @property time_stamp: Default of NOW(), timestamp of when the journal was created. This is not updateable.
     * @property workday_id: Id of a workday, in case an employee wishes to tag what they're working on for payroll purposes.
     */
    exports.tablename = 'workjournal_entry';
    var WorkjournalEntry = (function () {
        function WorkjournalEntry(id, journal_id, message, time_stamp, workday_id) {
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
        return WorkjournalEntry;
    }());
    exports["default"] = WorkjournalEntry;
    WorkjournalEntry.Delete = Data.Delete.bind(WorkjournalEntry.Delete);
    WorkjournalEntry.prototype.tablename = exports.tablename;
    WorkjournalEntry.Page = Data.Page.bind(WorkjournalEntry.Page);
    WorkjournalEntry.List = Data.List.bind(WorkjournalEntry.List);
    WorkjournalEntry.Save = Data.Save.bind(WorkjournalEntry.Save);
    WorkjournalEntry.Sync = Data.Sync.bind(WorkjournalEntry.Sync);
    WorkjournalEntry.Search = Data.Search.bind(WorkjournalEntry.Search);
    WorkjournalEntry.Update = Data.Update.bind(WorkjournalEntry.Update);
});
