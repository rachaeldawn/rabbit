

/*
 * Exported Functions: 
 * 	LockObject: Activates a lock on an object
 * 	UnlockObject: Removes a lock from an object
 * 	IsLocked: Checks whether or not there is an active lock on an object
 * 	ForceUnlock: Forces the unlock of an object
 * Private Functions: 
 */
/*
 * Purpose: Activates a lock on an object
 * @param target: The object to lock. Requires tablename. (default: undefined)
 * @param user: The id or User object locking the target (default: undefined)
 */
export function LockObject(target: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a lock from an object
 * @param target: The object to unlock. Requires tablename (default: undefined)
 * @param user: The id or User object unlocking (default: undefined)
 */
export function UnlockObject(target: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Checks whether or not there is an active lock on an object
 * @param obj: The object to check (default: undefined)
 */
export function IsLocked(obj: Object ) {
	throw 'Not implemented'
}
/*
 * Purpose: Forces the unlock of an object
 * @param target: The object to force the removal of the lock on (default: undefined)
 * @param user: The id or User object forcing the lock removal (default: undefined)
 */
export function ForceUnlock(target: Object , user: number|User ) {
	throw 'Not implemented'
}


