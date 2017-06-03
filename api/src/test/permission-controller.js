var PermissionController = require("../controllers/permission-controller")
describe('#PermissionController', function() {
	describe('CreatePermission', function() {
		it('Creates the permission for usage')
		it('Refuses if the permission already exists')
		it('Returns created permission')
	})
	describe('GrantPermission', function() {
		it('Refuses if giver does not have permission to provide permission')
		it('Refuses if giver does not exist')
		it('Refuses if user does not exist')
		it('Refuses if permission does not exist')
		it('Sets permission properly')
	})
	describe('RevokePermission', function() {
		it('Refuses if giver does not have permission to revoke permission')
		it('Refuses if revoker does not exist')
		it('Refuses if revokeee does not exist')
		it('Refuses if permission does not exist')
		it('Properly revokes permission')
		it('Updates permission cache')
	})
	describe('HasPermission', function() {
		it('Refuses if user does not exist')
		it('Refuses if permission does not exist')
		it('Returns proper true/false')
		it('Updates permission cache')
	})
	describe('CachePermissionSet', function() {
		it('Refuses if user does not exist')
		it('Caches all permissions')
	})
	describe('DeleteFromCache', function() {
		it('Refuses if user does not exist')
		it('Deletes permissions')
	})
})
