const lodash = require("lodash")
const data = require("../data")
const Asset = require("../data/asset")

var route = require('express').Router()


/*
 * /Create
 * Method: post
 * Remarks: Creates a new asset
 */
route.post('/Create', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /GetReq
 * Method: get
 * Remarks: GetRequ
 */
route.get('/GetReq', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /BothReq
 * Method: all
 * Remarks: Both request
 */
route.all('/BothReq', function(response, request) {
	throw "Route yet to be defined"
})


module.exports = route
