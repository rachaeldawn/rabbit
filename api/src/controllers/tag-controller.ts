import Tag from "../data/tag"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	TagObject: Tags an object
 * 	UntagObject: Removes the tag from an object
 * 	GetTags: Gets the tags for an object
 * 	StripTags: Removes all tags from an object. Use custom SQL to reduce query count. DROP FROM tag WHERE id=, then DROP from tablename_tag WHERE tablename_id=Y
 * Private Functions: 
 */
/*
 * Purpose: Tags an object
 * @param obj: Object to be tagged. NEEDS to have tablename. (default: undefined)
 * @param tagOrName: The name of a new tag, or a Tag object (default: undefined)
 * @param color: Must have at least R, G, and B (upper or lower), with optional A (default 255), or a length 3-4 array. [r, g, b, a = undefined] (default: undefined)
 */
export function TagObject(obj: Object , tagOrName: string|Tag , color: any ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes the tag from an object
 * @param obj: Must have tablename. The object to be untagged (default: undefined)
 * @param tag: The tag id (default: undefined)
 */
export function UntagObject(obj: Object , tag: number|Tag ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets the tags for an object
 * @param obj: Requires tablename. Object to look up. (default: undefined)
 */
export function GetTags(obj: Object ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes all tags from an object. Use custom SQL to reduce query count. DROP FROM tag WHERE id=, then DROP from tablename_tag WHERE tablename_id=Y
 * @param obj: Requires tablename. The object to remove all tags from. (default: undefined)
 */
export function StripTags(obj: Object ) {
	throw 'Not implemented'
}


