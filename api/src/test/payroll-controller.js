var PayrollController = require("../controllers/payroll-controller")
describe('#PayrollController', function() {
	describe('CreatePeriod', function() {
		it('Creates a new pay period')
		it('Refuses if there's an existing period in that timeframe')
		it('Refuses if the user does not have permission to create new pay periods')
		it('Refuses if the starting date is in the past')
		it('Refuses if the start date is after the end date')
	})
	describe('CreatePayroll', function() {
		it('Refuses if there is already an active payroll for the employee')
		it('Refuses if the period does not exist')
		it('Refuses if the employee does not exist')
		it('Creates a new payroll')
		it('Adds all of the items')
	})
	describe('AddPayrollItem', function() {
		it('Refuses if payroll entry does not exist')
		it('')
	})
})
