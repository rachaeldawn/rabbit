import {default as Entry} from "../data/journal_entry"
import Journal from "../data/journal"


/*
 * Field: entry
 *     Type: number|Entry
 * Field: destination
 *     Type: number|Journal
*/
export interface iJournalEntryMoveBatch {
    entry: number|Entry
    destination: number|Journal
}
