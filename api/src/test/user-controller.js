var UserController = require("../controllers/user-controller")
describe('#UserController', function() {
	describe('RegisterUserAccount', function() {
		it('Creates a new user')
		it('Hashes the password')
		it('Takes at least 400ms to generate')
		it('Sends iterations and password to hasher')
		it('Sets the user account as inactive')
	})
	describe('FinishUserRegistration', function() {
		it('Activates user account')
	})
	describe('ValidateActivationToken', function() {
		it('Validates correctly')
		it('Rejects invalid parameters')
		it('Rejects incorrect token')
	})
	describe('ActivateUser', function() {
		it('Properly activates a user')
		it('Refuses a non-existent user id')
		it('Ignores users that are already active')
	})
	describe('DeactivateUser', function() {
		it('Deactivates user')
		it('Ignores users that are already inactive')
		it('Refuses a non-existent user id')
	})
	describe('GetUserStatus', function() {
		it('gets proper status')
		it('ignores non-existent users')
	})
	describe('CreateUser', function() {
		it('Refuses bad-form username')
		it('Refuses passwords smaller than 8 characters')
		it('Uses hash algorithm')
	})
	describe('ResetPassword', function() {
		it('Password is reset')
	})
	describe('GeneratePassword', function() {
		it('Generates a hex password hash')
	})
	describe('CacheUsers', function() {
		it('Gets all users')
		it('Gets all password hashes')
		it('Categorizes users into Employees and Customers (if !employee then customer)')
	})
	describe('AddUserToCache', function() {
		it('Refuses a non-existent user id')
		it('Caches user')
	})
	describe('RemoveUserFromCache', function() {
		it('Removes user from cache')
		it('Refuses if user does not exist in cache already')
	})
	describe('GetCachedUser', function() {
		it('Retrieves users that do exist')
		it('Refuses if user does not exist')
	})
	describe('UpdateCachedUser', function() {
		it('Updates from database')
		it('Refuses if user does not exist in cache')
		it('Errors if user does not exist in database')
	})
})
