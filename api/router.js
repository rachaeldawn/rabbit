
var route = require('express').Router()


/*
 * /:Function/:Class
 * Method: post
 * Remarks: The Function/Class syntax, where Function and Class are part of this file's array.
 */
route.post('/:Function/:Class', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /:Function/:Class/:Subset
 * Method: post
 * Remarks: The Function/Class/Subset, where Function, Class, and Subset are part of this file's array.
 */
route.post('/:Function/:Class/:Subset', function(response, request) {
	throw "Route yet to be defined"
})


module.exports = route
