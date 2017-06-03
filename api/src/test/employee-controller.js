var EmployeeController = require("../controllers/employee-controller")
describe('#EmployeeController', function() {
	describe('ClockIn', function() {
		it('Refuses if the user is not an employee')
		it('Refuses if the user does not exist')
		it('Returns message saying they're clocked in if there's an active workday going.')
	})
	describe('ClockOut', function() {
		it('Refuses if the user is not an employee')
		it('Refuses if the user does not exist')
		it('Refuses if there is not an active workday going.')
	})
	describe('AddEmployee', function() {
		it('Checks if the first param is employee, and runs with it if it is')
		it('Ignores the other parameters if type of first parameter is employee')
		it('Refuses if any of the required fields are missing')
		it('Refuses if the user does not exist')
		it('Refuses if the user already has an employee linked')
		it('Refuses if the user is inactive')
		it('Creates a new employee')
	})
	describe('GetEmployee', function() {
		it('Refuses if the user does not exist')
		it('Gets filled employee object')
	})
	describe('GetEmployeeFromUser', function() {
		it('Returns null if there is no employee')
		it('Returns employee')
	})
	describe('FireEmployee', function() {
		it('Refuses if the user does not have permission to fire.')
		it('Refuses if the user does not exist')
		it('Refuses if the employee does not exist')
		it('Refuses if the user is not an employee')
		it('Sets the employee as inactive.')
	})
	describe('LoadEmployees', function() {
		it('Loads all employees')
		it('Loads only active')
	})
	describe('CacheEmployee', function() {
		it('Adds employee object to the cache')
	})
	describe('UncacheEmployee', function() {
		it('Refuses if the Employee object is invalid')
		it('Refuses if the employee does not exist')
		it('Errors if the employee can not be found')
		it('Removes the employee from the cache')
	})
})
