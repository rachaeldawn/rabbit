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
    exports.tablename = 'journal_entry_tag';
    var JournalEntryTag = (function () {
        function JournalEntryTag(id, entry_id, tag_id) {
            this.id = id;
            this.entry_id = entry_id;
            this.tag_id = tag_id;
        }
        return JournalEntryTag;
    }());
    exports["default"] = JournalEntryTag;
});
