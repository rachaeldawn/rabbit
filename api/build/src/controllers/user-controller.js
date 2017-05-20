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
    /*
     * Purpose: Register a new user for the system
     * @param username: The username that they will be signing up with (default: undefined)
     * @param password: The password they will be using (default: undefined)
     */
    function RegisterUserAccount(username, password) {
        throw 'Not implemented';
    }
    exports.RegisterUserAccount = RegisterUserAccount;
    /*
     * Purpose: Verifies a token for registration, and sets a user to active
     * @param user: The user id or user name that is to be registered (default: undefined)
     * @param token: The token string for the user registration (default: undefined)
     */
    function FinishUserRegistration(user, token) {
        throw 'Not implemented';
    }
    exports.FinishUserRegistration = FinishUserRegistration;
    /*
     * Purpose: Validation of the activation token
     * @param userid: The user id that is to be verified with a token (default: undefined)
     * @param token: The token to be verified (default: undefined)
     */
    function ValidateActivationToken(userid, token) {
        throw 'Not implemented';
    }
    exports.ValidateActivationToken = ValidateActivationToken;
    /*
     * Purpose: Activates a user that has been deactivated
     * @param userId: The user Id that is to be activated (default: undefined)
     */
    function ActivateUser(userId) {
        throw 'Not implemented';
    }
    exports.ActivateUser = ActivateUser;
    /*
     * Purpose: Deactivates a user that is currently active
     * @param userId: The user Id to be deactivated (default: undefined)
     */
    function DeactivateUser(userId) {
        throw 'Not implemented';
    }
    exports.DeactivateUser = DeactivateUser;
    /*
     * Purpose: Retrieves whether or not a user is active
     */
    function GetUserStatus() {
        throw 'Not implemented';
    }
    exports.GetUserStatus = GetUserStatus;
    /*
     * Purpose: Creates a new user. Utility function for user registration. Returns id
     * @param userName: The username to be used for logins. No spaces permitted. (default: undefined)
     * @param password: Password in plaintext form, pre-hash. (default: undefined)
     */
    function CreateUser(userName, password) {
        throw 'Not implemented';
    }
    exports.CreateUser = CreateUser;
    /*
     * Purpose: Uses a token to reset the user's password
     * @param newPassword: The new password (default: undefined)
     * @param resetToken: The token to be used for resetting the user's password (default: undefined)
     */
    function ResetPassword(newPassword, resetToken) {
        throw 'Not implemented';
    }
    exports.ResetPassword = ResetPassword;
    /*
     * Purpose: Dependency injection capable hasher
     * @param password: The password to be used by the algo (default: undefined)
     * @param algo: The hashing algorithm to be used (default: undefined)
     */
    function GeneratePassword(password, algo) { }
    exports.GeneratePassword = GeneratePassword;
    {
        throw 'Not implemented';
    }
    /*
     * Purpose: Caches all of the users locally so lookups in the database are not so arduous. To be done ONCE on application startup.
     */
    function CacheUsers() {
        throw 'Not implemented';
    }
    exports.CacheUsers = CacheUsers;
    /*
     * Purpose: Adds a new user to the cache
     * @param user: The id or the User object to store (default: undefined)
     */
    function AddUserToCache(user) {
        throw 'Not implemented';
    }
    exports.AddUserToCache = AddUserToCache;
    /*
     * Purpose: Removes a deactivated user from the cache
     * @param user: The id or user to remove from the cache (default: undefined)
     */
    function RemoveUserFromCache(user) {
        throw 'Not implemented';
    }
    exports.RemoveUserFromCache = RemoveUserFromCache;
    /*
     * Purpose: Gets a cached user
     * @param user: The user or id of the user to get (default: undefined)
     */
    function GetCachedUser(user) {
        throw 'Not implemented';
    }
    exports.GetCachedUser = GetCachedUser;
    /*
     * Purpose: Updates a user that was already cached.
     * @param user: The id or user to be updated from the database (default: undefined)
     */
    function UpdateCachedUser(user) {
        throw 'Not implemented';
    }
    exports.UpdateCachedUser = UpdateCachedUser;
});
