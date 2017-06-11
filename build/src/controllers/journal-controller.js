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
    function CreateJournal(name, user) {
        throw 'Not implemented';
    }
    exports.CreateJournal = CreateJournal;
    function GetJournal(journal, user, populated) {
        throw 'Not implemented';
    }
    exports.GetJournal = GetJournal;
    function ListJournals(amt, user, populated) {
        throw 'Not implemented';
    }
    exports.ListJournals = ListJournals;
    function PageJournals(amt, page, user, populated) {
        throw 'Not implemented';
    }
    exports.PageJournals = PageJournals;
    function UpdateJournal(journal, obj, user) {
        throw 'Not implemented';
    }
    exports.UpdateJournal = UpdateJournal;
    function DeleteJournal(journal, user) {
        throw 'Not implemented';
    }
    exports.DeleteJournal = DeleteJournal;
    function CreateEntry(journal, user, message, workday) {
        if (workday === void 0) { workday = -1; }
        throw 'Not implemented';
    }
    exports.CreateEntry = CreateEntry;
    function GetEntry(entry, user) {
        throw 'Not implemented';
    }
    exports.GetEntry = GetEntry;
    function ListEntries(amt, user, journal) {
        if (journal === void 0) { journal = -1; }
        throw 'Not implemented';
    }
    exports.ListEntries = ListEntries;
    function PageEntries(amt, page, user, journal) {
        if (journal === void 0) { journal = -1; }
        throw 'Not implemented';
    }
    exports.PageEntries = PageEntries;
    function UpdateEntry(entry, obj, user) {
        throw 'Not implemented';
    }
    exports.UpdateEntry = UpdateEntry;
    function DeleteEntry(entry, user) {
        throw 'Not implemented';
    }
    exports.DeleteEntry = DeleteEntry;
    function MoveEntry(entry, destination, user) {
        throw 'Not implemented';
    }
    exports.MoveEntry = MoveEntry;
    function DeleteEntryBatch(user) {
        var entries = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            entries[_i - 1] = arguments[_i];
        }
        throw 'Not implemented';
    }
    exports.DeleteEntryBatch = DeleteEntryBatch;
    function MoveEntryBatch(user) {
        var batch = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            batch[_i - 1] = arguments[_i];
        }
        throw 'Not implemented';
    }
    exports.MoveEntryBatch = MoveEntryBatch;
});
