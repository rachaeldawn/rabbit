var PaymentController = require("../../controllers/payment")
describe('#PaymentController', function() {
	describe(`ReceivePayment`, function() {
		it('Errors on invalid id')
		it('Adds transaction to database')
		it('Charges correct amount')
		it('Creates charge with Stripe')
	})
	describe(`ValidateToken`, function() {
		it('Rejects bad form before sending to server (local)')
		it('Rejects good form, invalid tokens (async)')
		it('Approves valid tokens')
	})
	describe(`Refund`, function() {
		it('Refunds correct amount')
		it('Ignores bad form for transaction id (local)')
		it('Breaks on non-existent transaction id')
	})
	describe(`Adjust`, function() {
		it('refunds correct partial amount')
		it('re-charges correct amount')
		it('refunds full amount on new charge higher')
	})
	describe(`CheckForEvents`, function() {
		it('Returns events when there are unread events')
		it('Returns nothing when there are no events to be read')
	})
	describe(`GetBalance`, function() {
		it('Retrieves proper balance')
	})
})
