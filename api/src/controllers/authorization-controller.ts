import * as crypto from "crypto"
import {default as User} from "../models/user_account"


/*
 * Exported Functions: 
 * 	Authorize: Authorizes a user's login. Uses a persistent token with a transient to verify a user's login. Persistent never changes, and is erased to log out, and the transient is to ensure a session is still valid.
 * 	Login: Logs a user in by hashing the password and validating a CSRF token
 * 	Logout: Logs a user out by removing the session on the server side. It is the client's responsibility to clean up themselves.
 * 	GenerateToken: Generates a token
 * 	CachePersistentToken: Caches a persistent token
 * 	CacheTransientToken: Caches a transient token
 * 	CacheCSRFToken: Caches a CSRF token for logins
 * 	ValidateAuthTokens: Validates a transient and persistent token together
 * 	ValidateCSRFToken: Validates a CSRF token for logins
 * Private Functions: 
 */
/*
 * Purpose: Authorizes a user's login. Uses a persistent token with a transient to verify a user's login. Persistent never changes, and is erased to log out, and the transient is to ensure a session is still valid.
 * @param persistentToken: The token to be verified (default: undefined)
 * @param transientToken: The transient token to be verified (default: undefined)
 */
export function Authorize(persistentToken: string, transientToken: string) {
	throw 'Not implemented'
}
/*
 * Purpose: Logs a user in by hashing the password and validating a CSRF token
 * @param username: The user name to log in (escape the HTML chars here) (default: undefined)
 * @param password: The password to hash and compare (default: undefined)
 * @param token: The token to prevent cross site request forgery (default: undefined)
 */
export function Login(username: string, password: string, token: string) {
	throw 'Not implemented'
}
/*
 * Purpose: Logs a user out by removing the session on the server side. It is the client's responsibility to clean up themselves.
 * @param persistentToken: The token that was being used to verify the user (default: undefined)
 * @param transientToken: The transient token last sent to the user (default: undefined)
 */
export function Logout(persistentToken: string, transientToken: string) {
	throw 'Not implemented'
}
/*
 * Purpose: Generates a token
 */
export function GenerateToken() {
	throw 'Not implemented'
}
/*
 * Purpose: Caches a persistent token
 * @param token: The persistent token to be cached (default: undefined)
 * @param user: The id or user object the persistent token belongs to (default: undefined)
 */
export function CachePersistentToken(token: string, user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Caches a transient token
 * @param token: The transient token to be cached (default: undefined)
 * @param persistentToken: The persistent token this transient token belongs to (default: undefined)
 */
export function CacheTransientToken(token: string, persistentToken: string) {
	throw 'Not implemented'
}
/*
 * Purpose: Caches a CSRF token for logins
 * @param token: The token to be cached (default: undefined)
 * @param ip: The IP address that requested the CSRF token (default: undefined)
 */
export function CacheCSRFToken(token: string, ip: string) {
	throw 'Not implemented'
}
/*
 * Purpose: Validates a transient and persistent token together
 * @param transient: The transient token to be validated (default: undefined)
 * @param persistent: The persisten token to be validated (default: undefined)
 */
export function ValidateAuthTokens(transient: string, persistent: string) {
	throw 'Not implemented'
}
/*
 * Purpose: Validates a CSRF token for logins
 * @param token: The token string to be validated (default: undefined)
 * @param ip: The ip that is requesting the validation (default: undefined)
 */
export function ValidateCSRFToken(token: string, ip: string) {
	throw 'Not implemented'
}


