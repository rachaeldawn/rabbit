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
    exports.tablename = 'workjournal_entry_tag';
    var WorkjournalEntryTag = (function () {
        function WorkjournalEntryTag(id, entry_id, tag_id) {
            this.id = id;
            this.entry_id = entry_id;
            this.tag_id = tag_id;
        }
        return WorkjournalEntryTag;
    }());
    exports["default"] = WorkjournalEntryTag;
});
