import * as crypto from "crypto"
import {default as User} from "../data/user_account"
import * as Data from "../data"
import * as Validator from "validator"
import * as Errors from "../errors/controllers/user"


/*
 * Exported Functions: 
 * 	RegisterUserAccount: Register a new user for the system
 * 	FinishUserRegistration: Verifies a token for registration, and sets a user to active
 * 	ValidateActivationToken: Validation of the activation token
 * 	ActivateUser: Activates a user that has been deactivated
 * 	DeactivateUser: Deactivates a user that is currently active
 * 	GetUserStatus: Retrieves whether or not a user is active
 * 	CreateUser: Creates a new user. Utility function for user registration. Returns id
 * 	ResetPassword: Uses a token to reset the user's password
 * 	GeneratePassword: Dependency injection capable hasher
 * 	CacheUsers: Caches all of the users locally so lookups in the database are not so arduous. To be done ONCE on application startup.
 * 	AddUserToCache: Adds a new user to the cache
 * 	RemoveUserFromCache: Removes a deactivated user from the cache
 * 	GetCachedUser: Gets a cached user
 * 	UpdateCachedUser: Updates a user that was already cached.
 * Private Functions: 
 */

interface iUserCache {
	[key: string]: User
}

let UserCache:iUserCache = {}

/*
 * Purpose: Register a new user for the system
 * @param username: The username that they will be signing up with (default: undefined)
 * @param password: The password they will be using (default: undefined)
 */
export function RegisterUserAccount(email: string, username: string , password: string) {
	// TODO: Abstract field validation
	// Need the regex to validate username. Will abstract later.
	let validUsername = /[^a-z0-9+]+/
	username = username.toLowerCase()
	
	// Validate the fields that count
	validator.isEmail(email) && Errors.BadFormEmailError(email)
	username.length > 140 || validUsername.exec(username) && Errors.BadFormUsernameError(username)
	password.length < 8 || password.length > 120 && Errors.BadPasswordLength()
}
/*
 * Purpose: Verifies a token for registration, and sets a user to active
 * @param user: The user id or user name that is to be registered (default: undefined)
 * @param token: The token string for the user registration (default: undefined)
 */
export function FinishUserRegistration(user: number|string , token: string ) {
	throw 'Not implemented'
}
/*
 * Purpose: Validation of the activation token
 * @param userid: The user id that is to be verified with a token (default: undefined)
 * @param token: The token to be verified (default: undefined)
 */
export function ValidateActivationToken(userid: number , token: string ) {
	throw 'Not implemented'
}
/*
 * Purpose: Activates a user that has been deactivated
 * @param userId: The user Id that is to be activated (default: undefined)
 */
export function ActivateUser(userId: number ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deactivates a user that is currently active
 * @param userId: The user Id to be deactivated (default: undefined)
 */
export function DeactivateUser(userId: number ) {
	throw 'Not implemented'
}
/*
 * Purpose: Retrieves whether or not a user is active
 */
export function GetUserStatus() {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a new user. Utility function for user registration. Returns id
 * @param userName: The username to be used for logins. No spaces permitted. (default: undefined)
 * @param password: Password in plaintext form, pre-hash. (default: undefined)
 */
export function CreateUser(userName: string , password: string ) {
	throw 'Not implemented'
}
/*
 * Purpose: Uses a token to reset the user's password
 * @param newPassword: The new password (default: undefined)
 * @param resetToken: The token to be used for resetting the user's password (default: undefined)
 */
export function ResetPassword(newPassword: string , resetToken: string ) {
	throw 'Not implemented'
}
/*
 * Purpose: Dependency injection capable hasher
 * @param password: The password to be used by the algo (default: undefined)
 * @param algo: The hashing algorithm to be used (default: undefined)
 */
export function GeneratePassword(password: string , algo: (password: string|Buffer, salt: string|Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any) => any ) {
	
}
/*
 * Purpose: Caches all of the users locally so lookups in the database are not so arduous. To be done ONCE on application startup.
 */
export function CacheUsers() {
	throw 'Not implemented'
}
/*
 * Purpose: Adds a new user to the cache
 * @param user: The id or the User object to store (default: undefined)
 */
export function AddUserToCache(user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a deactivated user from the cache
 * @param user: The id or user to remove from the cache (default: undefined)
 */
export function RemoveUserFromCache(user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a cached user
 * @param user: The user or id of the user to get (default: undefined)
 */
export function GetCachedUser(user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a user that was already cached.
 * @param user: The id or user to be updated from the database (default: undefined)
 */
export function UpdateCachedUser(user: number|User ) {
	throw 'Not implemented'
}


