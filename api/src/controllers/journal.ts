import {default as Entry} from "../data/journal_entry"
import Journal from "../data/journal"
import {default as User} from "../data/user_account"
import {iJournalEntryMoveBatch} from "../interfaces/journal-entry-move-batch"
import {default as Workday} from "../data/employee_workday"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	CreateJournal: Creates a new journal object
 * 	GetJournal: Gets a single journal
 * 	ListJournals: Gets a list of journals. Alias for PageJournals(page=1)
 * 	PageJournals: Gets a page of Journals
 * 	UpdateJournal: Sets the name of a journal
 * 	DeleteJournal: Deletes a journal (and all entries)
 * 	CreateEntry: Creates a journal entry
 * 	GetEntry: Gets a single entry
 * 	ListEntries: Gets a list of entries. Alias for PageEntries(page = 1)
 * 	PageEntries: Gets a page of entries
 * 	UpdateEntry: Updates an entry
 * 	DeleteEntry: Deletes a single entry
 * 	MoveEntry: Moves a single entry to another journal
 * 	DeleteEntryBatch: Deletes multiple entries
 * 	MoveEntryBatch: Move multiple entries to different locations
 * Private Functions: 
 */
/*
 * Purpose: Creates a new journal object
 * @param name: A max 120 character long name of the journal (default: undefined)
 * @param user: The id or User object requesting the creation of this journal (default: undefined)
 */
export function CreateJournal(name: string , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single journal
 * @param journal: The id or Journal object being requested (default: undefined)
 * @param user: The id or User object requesting the journal (default: undefined)
 * @param populated: Whether or not the Journal object should be filled with its respective entries (default: undefined)
 */
export function GetJournal(journal: number|Journal , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of journals. Alias for PageJournals(page=1)
 * @param amt: The quantity of Journals to return (default: undefined)
 * @param user: The id or User object requesting the journals (default: undefined)
 * @param populated: Whether or not the list of journals should be populated with entries (default: false)
 */
export function ListJournals(amt: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of Journals
 * @param amt: The amount in a page to get (default: undefined)
 * @param page: The page to get (minimum 1) (default: undefined)
 * @param user: The user requesting the journals (default: undefined)
 * @param populated: Whether or not the journal returns should be populated (default: undefined)
 */
export function PageJournals(amt: number , page: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets the name of a journal
 * @param journal: The id or Journal object to be updated (default: undefined)
 * @param obj: The update object. Supports name. (default: undefined)
 * @param user: The id or User object requesting the update (default: undefined)
 */
export function UpdateJournal(journal: number|Journal , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes a journal (and all entries)
 * @param journal: The id or Journal object to be deleted (default: undefined)
 * @param user: The id or User object deleting the journal booklet (default: undefined)
 */
export function DeleteJournal(journal: number|Journal , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a journal entry
 * @param journal: The id or Journal the entry is being created in (default: undefined)
 * @param user: The id or User object requesting the creation of the entry (default: undefined)
 * @param message: A max 5000 character journal entry (default: undefined)
 * @param workday: The optional workday to attach this journal to (default: -1)
 */
export function CreateEntry(journal: number|Journal , user: number|User , message: string , workday: number|Workday  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single entry
 * @param entry: The journal entry to retriev (default: undefined)
 * @param user: The id or User object requesting to see the journal (default: undefined)
 */
export function GetEntry(entry: number|Entry , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of entries. Alias for PageEntries(page = 1)
 * @param amt: Max 100 number of journal entries (default: undefined)
 * @param user: The id or User object requesting the list (default: undefined)
 * @param journal: Optional id or Journal object the entries are to belong to (default: -1)
 */
export function ListEntries(amt: number , user: number|User , journal: number|Journal  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of entries
 * @param amt: The amount in a page to retrieve (max 100) (default: undefined)
 * @param page: The page number to get (starting point 1) (default: undefined)
 * @param user: The id or User object requesting the page (default: undefined)
 * @param journal: The optional id or Journal object the entries are specific to (default: -1)
 */
export function PageEntries(amt: number , page: number , user: number|User , journal: number|Journal  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates an entry
 * @param entry: The id or Entry object to update (default: undefined)
 * @param obj: The update object. Supports fields message and workday (default: undefined)
 * @param user: The id or User object attempting to update entry (default: undefined)
 */
export function UpdateEntry(entry: number|Entry , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes a single entry
 * @param entry: The id or Entry object to delete (default: undefined)
 * @param user: The id or User object deleting the journal entry (default: undefined)
 */
export function DeleteEntry(entry: number|Entry , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Moves a single entry to another journal
 * @param entry: The id or Entry object to move (default: undefined)
 * @param destination: The id or journal object to move the entry to (default: undefined)
 * @param user: The id or User object requesting the move (default: undefined)
 */
export function MoveEntry(entry: number|Entry , destination: number|Journal , user: number ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes multiple entries
 * @param user: The id or User object deleting the batch (default: undefined)
 * @param ... entries: The array of ids or entries to delete (default: undefined)
 */
export function DeleteEntryBatch(user: number|User , ... entries: Array<number|Entry> ) {
	throw 'Not implemented'
}
/*
 * Purpose: Move multiple entries to different locations
 * @param user: The id or User object moving the journals (default: undefined)
 * @param ... batch: The array of entry move batches (default: undefined)
 */
export function MoveEntryBatch(user: number|User , ... batch: Array<iJournalEntryMoveBatch> ) {
	throw 'Not implemented'
}


