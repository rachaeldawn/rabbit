var JournalController = require("../../controllers/journal");
describe('#JournalController', function () {
    describe("CreateJournal", function () {
        it('Undefined if user does not exist');
        it('Refuses if user is not an employee');
        it('Creates new journal');
    });
    describe("GetJournal", function () {
        it('Undefined if Journal or User does not exist');
        it('Refuses if journal does not belong to user');
        it('Retrieves basic journal information if populated false');
        it('Retrieves journal with all entries if populated true');
    });
    describe("ListJournals", function () {
        it('Undefined if user does not exist');
        it('Refuses if user is not an employee');
        it('Returns only journals belonging to the user');
        it('Caps out at max 100');
        it('Returns list of journals');
        it('Returns list of populated journals if populated true');
    });
    describe("PageJournals", function () {
        it('Undefined if user does not exist');
        it('Refuses if user is not an employee');
        it('Returns only journals belonging to the user');
        it('Returns page of journals');
        it('Caps out at max 100');
        it('Returns populated page of journals if populated true');
    });
    describe("UpdateJournal", function () {
        it('Undefined if user or journal does not exist');
        it('Refuses if user is not an employee');
        it('Refuses if Journal does not belong to user');
        it('Refuses bad form update object (no valid fields)');
        it('Updates all fields');
    });
    describe("DeleteJournal", function () {
        it('Refuses if Journal does not belong to User');
        it('Refuses if user is not an employee');
        it('Undefined if user or journal does not exist');
        it('Deletes all journal entries');
        it('Deletes journal');
    });
    describe("CreateEntry", function () {
        it('Refuses if Journal does not belong to User');
        it('Refuses if user is not an employee');
        it('Undefined on invalid fields');
        it('Undefined if journal or user does not exist');
        it('Tags workday if workday set');
        it('Creates journal entry');
    });
    describe("GetEntry", function () {
        it('Refuses if entry does not belong to the user');
        it('Refuses if user is not an employee');
        it('Undefined if entry or user does not exist');
        it('Gets entry');
    });
    describe("ListEntries", function () {
        it('Undefined if invalid fields');
        it('Undefined if journal or user does not exist');
        it('Refuses if user is not an employee');
        it('Undefined if journal specified, but does not exist');
        it('Returns list of Entries');
        it('Returns list of entries specific to a journal if journal specified');
    });
    describe("PageEntries", function () {
        it('Undefined on invalid fields');
        it('Undefined if user does not exist');
        it('Undefined if journal specified, but does not exist');
        it('Refuses if user is not an employee');
        it('Caps out at max 100');
        it('Returns page of entries');
        it('Returns page of entries specific to journal if journal specified');
    });
    describe("UpdateEntry", function () {
        it('Undefined if user or entry does not exist');
        it('Refuses bad form update object (no valid fields)');
        it('Refuses if entry does not belong to user');
        it('Updates all fields');
    });
    describe("DeleteEntry", function () {
        it('Undefined if entry or user do not exist');
        it('Refuses if entry does not belong to user');
        it('Refuses if user is not an employee');
        it('Deletes entry');
    });
    describe("MoveEntry", function () {
        it('Refuses if destination or entry do not belong to user');
        it('Refuses if user is not an employee');
        it('Undefined if user, entry, or destination are undefined');
        it('Moves entry');
    });
    describe("DeleteEntryBatch", function () {
        it('Deletes entries belonging to user');
        it('Refuses all entries that do not belong to the user');
        it('Refuses if user is not an employee');
        it('Returns object {succeeded[], failed[]} format');
    });
    describe("MoveEntryBatch", function () {
        it('Refuses entries not belonging to user');
        it('Refuses destinations not belonging to user');
        it('Undefined on nonexistent user');
        it('Refuses non-existent entries and destinations');
        it('Moves entries where destination and entry both belong to user');
        it('Returns object {succeeded[], failed[]} format');
    });
});
