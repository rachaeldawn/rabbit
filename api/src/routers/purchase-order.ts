import { Router } from "express"
var route = Router()


/*
 * /
 * Method: post
 * Remarks: Get a purchase order
 */
route.post('/', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /list
 * Method: post
 * Remarks: Get a list of purchase orders
 */
route.post('/list', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /page
 * Method: post
 * Remarks: Get a page of purchase orders
 */
route.post('/page', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /lock
 * Method: post
 * Remarks: Lock a purchase order (open it)
 */
route.post('/lock', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /release
 * Method: post
 * Remarks: Release a purchase order from the lock
 */
route.post('/release', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /delete
 * Method: post
 * Remarks: Delete a purchase order (deletes only if it has not been processed)
 */
route.post('/delete', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /item
 * Method: post
 * Remarks: Get an item on a purchase order
 */
route.post('/item', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /item/add
 * Method: post
 * Remarks: Add a new item to the purchase order
 */
route.post('/item/add', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /item/list
 * Method: post
 * Remarks: Get all items on the purchase order
 */
route.post('/item/list', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /item/update
 * Method: post
 * Remarks: Update a single item on the purchase order
 */
route.post('/item/update', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /item/remove
 * Method: post
 * Remarks: Remove an item from the purchase order
 */
route.post('/item/remove', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /memo
 * Method: post
 * Remarks: Get the memo from a purchase order
 */
route.post('/memo', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /memo/set
 * Method: post
 * Remarks: Set the memo on a purchase order
 */
route.post('/memo/set', function(response, request) {
	throw "Route yet to be defined"
})


export default route = route
