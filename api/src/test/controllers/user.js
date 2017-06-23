var UserController = require("../../controllers/user")
describe('#UserController', function() {
	describe(`RegisterUserAccount`, function() {
		it('Creates a new user')
		it('Hashes the password')
		it('Sends iterations and password to hasher')
		it('Sets the user account as inactive')
		it('Sends email with activation token link')
		it('Refuses bad form email')
	})
	describe(`FinishUserRegistration`, function() {
		it('Activates user account')
	})
	describe(`ValidateActivationToken`, function() {
		it('Validates correctly')
		it('Rejects invalid parameters')
		it('Rejects incorrect token')
	})
	describe(`ActivateUser`, function() {
		it('Properly activates a user')
		it('Refuses a non-existent user id')
		it('Ignores users that are already active')
		it('Refuses users that never finished registration')
	})
	describe(`DeactivateUser`, function() {
		it('Deactivates user')
		it('Ignores users that are already inactive')
		it('Refuses a non-existent user id')
	})
	describe(`GetUserStatus`, function() {
		it('gets proper status')
		it('ignores non-existent users')
	})
	describe(`CreateUser`, function() {
		it('Refuses bad-form username')
		it('Refuses passwords smaller than 8 characters')
		it('Uses hash algorithm')
	})
	describe(`ResetPassword`, function() {
		it('Password is reset')
	})
	describe(`GeneratePassword`, function() {
		it('Generates a hex password hash')
	})
	describe(`CacheUsers`, function() {
		it('Gets all users')
		it('Gets all password hashes')
		it('Categorizes users into Employees and Customers (if !employee then customer)')
	})
	describe(`AddUserToCache`, function() {
		it('Refuses a non-existent user id')
		it('Caches user')
	})
	describe(`RemoveUserFromCache`, function() {
		it('Removes user from cache')
	})
	describe(`GetCachedUser`, function() {
		it('Retrieves users that do exist')
	})
	describe(`UpdateCachedUser`, function() {
		it('Updates from database')
		it('Errors if user does not exist in database')
	})
})
