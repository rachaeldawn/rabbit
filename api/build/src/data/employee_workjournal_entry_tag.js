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
     * @property id: Id of a single tag binding
     * @property entry_id: Id of the entry to be bound
     * @property tag_id: Id of the tag to be bound
     */
    exports.tablename = 'employee_workjournal_entry_tag';
    var EmployeeWorkjournalEntryTag = (function () {
        function EmployeeWorkjournalEntryTag(id, entry_id, tag_id) {
            this.id = id;
            this.entry_id = entry_id;
            this.tag_id = tag_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return EmployeeWorkjournalEntryTag;
    }());
    exports["default"] = EmployeeWorkjournalEntryTag;
    EmployeeWorkjournalEntryTag.Delete = Data.Delete.bind(EmployeeWorkjournalEntryTag.Delete);
    EmployeeWorkjournalEntryTag.prototype.tablename = exports.tablename;
    EmployeeWorkjournalEntryTag.Page = Data.Page.bind(EmployeeWorkjournalEntryTag.Page);
    EmployeeWorkjournalEntryTag.List = Data.List.bind(EmployeeWorkjournalEntryTag.List);
    EmployeeWorkjournalEntryTag.Save = Data.Save.bind(EmployeeWorkjournalEntryTag.Save);
    EmployeeWorkjournalEntryTag.Sync = Data.Sync.bind(EmployeeWorkjournalEntryTag.Sync);
    EmployeeWorkjournalEntryTag.Search = Data.Search.bind(EmployeeWorkjournalEntryTag.Search);
    EmployeeWorkjournalEntryTag.Update = Data.Update.bind(EmployeeWorkjournalEntryTag.Update);
});
