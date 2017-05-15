

/*
 * Exported Functions: 
 * 	MakePayment: To process payments
 * Private Functions: 
 */
/*
 * Purpose: To process payments
 * @param token: The stripe token
 * @param amt: The amount of the payment
 * @param description: The reason or description for/of the payment
 * @param save: Whether or not the card details should be re-used
 */
function MakePayment(token, amt, description, save) {
	throw 'Not implemented'
}


module.exports.MakePayment = MakePayment
