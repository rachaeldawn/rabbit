import * as PaymentController from "../controllers/payment"
import { Router } from "express"
var route = Router()


/*
 * /receive
 * Method: post
 * Remarks: Receive a payment
 */
route.post('/receive', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /validatetoken
 * Method: post
 * Remarks: Validates a token
 */
route.post('/validatetoken', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /refund
 * Method: post
 * Remarks: Refunds a payment
 */
route.post('/refund', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /adjust
 * Method: post
 * Remarks: Adjusts a payment
 */
route.post('/adjust', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /events
 * Method: post
 * Remarks: Checks for new events
 */
route.post('/events', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /balance
 * Method: post
 * Remarks: Gets the balance of what stripe owes us
 */
route.post('/balance', function(response, request) {
	throw "Route yet to be defined"
})


export default route = route
