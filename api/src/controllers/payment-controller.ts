import * as _ from "lodash"
import * as StripeNode from "stripe"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	ReceivePayment: Process payments by taking the id of a token, verifying it is a valid token, then processing a payment of amount amt.
 * 	ValidateToken: Easier validation of tokens to make testing easier.
 * 	Refund: Refund a payment to a customer
 * 	Adjust: Adjust a previously made payment (refund, and makepayment, or just a refund if is less)
 * 	CheckForEvents: Check for new events from Stripe
 * 	GetBalance: Returns the balance that stripe owes us thus far
 * Private Functions: 
 */
/*
 * Purpose: Process payments by taking the id of a token, verifying it is a valid token, then processing a payment of amount amt.
 * @param tokenId: The stripe token (default: undefined)
 * @param amt: The amount of the payment (default: undefined)
 * @param description: The reason or description for/of the payment (default: undefined)
 * @param save: Whether or not the card details should be saved through Stripe for future re-use. (default: false)
 */
export function ReceivePayment(tokenId: string, amt: number, description: string, save: boolean = false) {
	throw 'Not implemented'
}
/*
 * Purpose: Easier validation of tokens to make testing easier.
 * @param tokenId: The stripe token id (default: undefined)
 */
export function ValidateToken(tokenId: number) {
	throw 'Not implemented'
}
/*
 * Purpose: Refund a payment to a customer
 * @param transaction: A charge object (default: undefined)
 * @param amount: Amount to refund. -1 means full amount (default: -1)
 */
export function Refund(transaction: any, amount: number = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Adjust a previously made payment (refund, and makepayment, or just a refund if is less)
 * @param transaction: Positive or negative decimal (default: undefined)
 * @param amount: Positive or negative decimal (default: undefined)
 */
export function Adjust(transaction: any, amount: number) {
	throw 'Not implemented'
}
/*
 * Purpose: Check for new events from Stripe
 */
export function CheckForEvents() {
	throw 'Not implemented'
}
/*
 * Purpose: Returns the balance that stripe owes us thus far
 */
export function GetBalance() {
	throw 'Not implemented'
}


