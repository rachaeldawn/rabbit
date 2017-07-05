import * as crypto from "crypto"
import { default as User } from "../data/user_account"
import { default as Password } from "../data/user_account_password"
import * as Data from "../data"
import * as Validator from "validator"
import * as Errors from "../errors/controllers/user"


/*
 * Exported Functions: 
 *  RegisterUserAccount: Register a new user for the system
 *  FinishUserRegistration: Verifies a token for registration, and sets a user to active
 *  ValidateActivationToken: Validation of the activation token
 *  ActivateUser: Activates a user that has been deactivated
 *  DeactivateUser: Deactivates a user that is currently active
 *  GetUserStatus: Retrieves whether or not a user is active
 *  CreateUser: Creates a new user. Utility function for user registration. Returns id
 *  ResetPassword: Uses a token to reset the user's password
 *  GeneratePassword: Dependency injection capable hasher
 *  CacheUsers: Caches all of the users locally so lookups in the database are not so arduous. To be done ONCE on application startup.
 *  AddUserToCache: Adds a new user to the cache
 *  RemoveUserFromCache: Removes a deactivated user from the cache
 *  GetCachedUser: Gets a cached user
 *  UpdateCachedUser: Updates a user that was already cached.
 */

interface iUserCache {
    [key: string]: User
}

let UserCache: iUserCache = {}

/*
 * Purpose: Register a new user for the system
 * @param email: The email account to contact the user at (default: undefined)
 * @param username: The username that they will be signing up with (default: undefined)
 * @param password: The password they will be using (default: undefined)
 */
export function RegisterUserAccount(email: string, username: string, password: string) {
    // TODO: Abstract field validation
    // Need the regex to validate username. Will abstract later.
    username == undefined && Errors.BadFormUsernameError(username)
    email == undefined && Errors.BadFormEmailError(email)
    password == undefined && Errors.BadPasswordLength()
    let validUsername = /[(a-zA-Z0-9_)]+/
    username = username.toLowerCase()
    // Validate the fields that count
    !Validator.isEmail(email) && Errors.BadFormEmailError(email)
    username.length > 140 || !validUsername.exec(username) && Errors.BadFormUsernameError(username)
    password.length < 8 || password.length > 120 && Errors.BadPasswordLength()
    return CreateUser(email, username, password)
            .then(GenerateActivationToken)
            .then(SendActivationEmail)
}
/*
 * Purpose: Verifies a token for registration, and sets a user to active
 * @param user: The user id or user name that is to be registered (default: undefined)
 * @param token: The token string for the user registration (default: undefined)
 */
export function FinishUserRegistration(user: number | string, token: string) {
    throw 'Not implemented'
}
/*
 * Purpose: Validation of the activation token
 * @param userid: The user id that is to be verified with a token (default: undefined)
 * @param token: The token to be verified (default: undefined)
 */
export function ValidateActivationToken(userid: number, token: string) {
    throw 'Not implemented'
}
/*
 * Purpose: Activates a user that has been deactivated
 * @param userId: The user Id that is to be activated (default: undefined)
 */
export function ActivateUser(userId: number) {
    return LookupUser({id: userId} as iUserLookup)
        .then((user: User) => {
            
        })
        .catch(err => console.error(err))
}
/*
 * Purpose: Deactivates a user that is currently active
 * @param userId: The user Id to be deactivated (default: undefined)
 */
export function DeactivateUser(userId: number) {
    throw 'Not implemented'
}
/*
 * Purpose: Retrieves whether or not a user is active
 * @param user: The id or User object to get the status of. Optional. If excluded, will get current session's user status.
 */
export function GetUserStatus(user: number|User) {
    return new Promise(function(resolve, reject) {
        user = typeof(user) === typeof(new User()) ? user : new User(user)
        Data.Sync(user)
            .then((res: User) => {
                return res.is_active
            })
    })
}
/*
 * Purpose: Creates a new user. Utility function for user registration. Returns id
 * @param emailaddr: The email the user registered with
 * @param userName: The username to be used for logins. No spaces permitted. (default: undefined)
 * @param password: Password in plaintext form, pre-hash. (default: undefined)
 */
export function CreateUser(emailaddr: string, userName: string, password: string): Promise<number> {
    return new Promise(function(resolve, reject) {
        Validator.normalizeEmail(emailaddr, {lowercase: true})
        LookupUser({email: emailaddr, username: userName} as iUserLookup)
            .then(() => reject('User already exists'))
            .catch(() => 
                Data.Save(new User(-1, userName, emailaddr, false))
                    .then((userObj: User) => GeneratePassword(password, userObj, crypto.pbkdf2))
                    .then(Data.Save)
                    .catch(err => reject('Unable to create user. Reason: ' + err))
            )
    })
}
/*
 * Purpose: Uses a token to reset the user's password
 * @param newPassword: The new password (default: undefined)
 * @param resetToken: The token to be used for resetting the user's password (default: undefined)
 */
export function ResetPassword(newPassword: string, resetToken: string) {
    throw 'Not implemented'
}
/*
 * Purpose: Dependency injection capable hasher
 * @param password: The password to be used by the algo (default: undefined)
 * @param algo: The hashing algorithm to be used (default: undefined)
 */
export function GeneratePassword(password: string, user: number|User, algo: (password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any) => any): Promise<Password> {
    return new Promise(function(resolve, reject) {
        let salt = crypto.randomBytes(32)
        algo(password, salt, 150000, 512, 'sha512', (err, derivedKey) => {
            err && reject(err)
            resolve(derivedKey.toString('hex'))
            let id = (typeof user === typeof new User()) ? (user as User).id : user
            resolve(new Password(id, derivedKey, salt, 150000))
        })
    })
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
export function AddUserToCache(user: number | User) {
    throw 'Not implemented'
}
/*
 * Purpose: Removes a deactivated user from the cache
 * @param user: The id or user to remove from the cache (default: undefined)
 */
export function RemoveUserFromCache(user: number | User) {
    throw 'Not implemented'
}
/*
 * Purpose: Gets a cached user
 * @param user: The user or id of the user to get (default: undefined)
 */
export function GetCachedUser(user: number | User) {
    throw 'Not implemented'
}
/*
 * Purpose: Updates a user that was already cached.
 * @param user: The id or user to be updated from the database (default: undefined)
 */
export function UpdateCachedUser(user: number | User) {
    throw 'Not implemented'
}


/*
 * Purpose: Generates a new activation token
 * @param email: The email to validate (default: undefined) 
 */
export function GenerateActivationToken(user: number|User) {
    return new Promise(function(resolve, reject){
        reject('Not implemented uet')
    })
}

/*
 * Purpose: Sends email for user to activate their account
 * @param user: The id or User object 
 */
export function SendActivationEmail(user: number|User) {
    return new Promise<boolean>((resolve, reject) => {
        resolve(true)
    })
}

interface iUserLookup {
    id?: number,
    username?: string,
    email?: string,
    tablename: string
}
/**
 * Purpose: Look up user in cache, then database
 * @param obj: The search object. Supports fields id, username, email
 */
export function LookupUser(obj: iUserLookup): Promise<User> {
    return Data.Search(obj, 1)
            .then(results => results[0])
}