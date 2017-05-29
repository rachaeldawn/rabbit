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
    exports.tablename = 'workjournal_entry_tag';
    var WorkjournalEntryTag = (function () {
        function WorkjournalEntryTag(id, entry_id, tag_id) {
            this.id = id;
            this.entry_id = entry_id;
            this.tag_id = tag_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return WorkjournalEntryTag;
    }());
    exports["default"] = WorkjournalEntryTag;
    WorkjournalEntryTag.Delete = Data.Delete.bind(WorkjournalEntryTag.Delete);
    WorkjournalEntryTag.prototype.tablename = exports.tablename;
    WorkjournalEntryTag.Page = Data.Page.bind(WorkjournalEntryTag.Page);
    WorkjournalEntryTag.List = Data.List.bind(WorkjournalEntryTag.List);
    WorkjournalEntryTag.Save = Data.Save.bind(WorkjournalEntryTag.Save);
    WorkjournalEntryTag.Sync = Data.Sync.bind(WorkjournalEntryTag.Sync);
    WorkjournalEntryTag.Search = Data.Search.bind(WorkjournalEntryTag.Search);
    WorkjournalEntryTag.Update = Data.Update.bind(WorkjournalEntryTag.Update);
});
