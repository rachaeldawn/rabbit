const _ = require("lodash")
const auth = require("../auth")
const data = require("../data")

var route = require('express').Router()


/*
 * /Asset/New
 * Method: post
 * Remarks: Create a new asset
 */
route.post('/Asset/New', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Update
 * Method: post
 * Remarks: Update an existing asset
 */
route.post('/Asset/Update', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Sync
 * Method: post
 * Remarks: Pull an asset from the database
 */
route.post('/Asset/Sync', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Sync/:Id
 * Method: post
 * Remarks: Pull an asset from the database based on id
 */
route.post('/Asset/Sync/:Id', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Archive
 * Method: post
 * Remarks: Archive an asset
 */
route.post('/Asset/Archive', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Archive/:Id
 * Method: post
 * Remarks: Archive an asset
 */
route.post('/Asset/Archive/:Id', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Page
 * Method: post
 * Remarks: Uses a JSON object to get a page of assets
 */
route.post('/Asset/Page', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Page/:Amount/:Page
 * Method: post
 * Remarks: Get a page of assets
 */
route.post('/Asset/Page/:Amount/:Page', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/List/:Amount
 * Method: post
 * Remarks: Lists an amount of assets
 */
route.post('/Asset/List/:Amount', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/List/Tag/:Amount
 * Method: post
 * Remarks: List of all asset tags
 */
route.post('/Asset/List/Tag/:Amount', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/New
 * Method: post
 * Remarks: Tags an asset
 */
route.post('/Asset/Tag/New', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/List
 * Method: post
 * Remarks: List of tagged assets
 */
route.post('/Asset/Tag/List', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/List/:Amount
 * Method: post
 * Remarks: List amount of tagged assets
 */
route.post('/Asset/Tag/List/:Amount', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/Page/:Amount
 * Method: post
 * Remarks: Page of assets that are tagged
 */
route.post('/Asset/Tag/Page/:Amount', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/Delete
 * Method: post
 * Remarks: Deletes a tag
 */
route.post('/Asset/Tag/Delete', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/Update
 * Method: post
 * Remarks: Updates an asset's tag
 */
route.post('/Asset/Tag/Update', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/Sync
 * Method: post
 * Remarks: Pulls an asset's tag from the DB
 */
route.post('/Asset/Tag/Sync', function(response, request) {
	throw "Route yet to be defined"
})


/*
 * /Asset/Tag/Sync/:Id
 * Method: post
 * Remarks: Pulls an asset's tag based an asset's id from the database
 */
route.post('/Asset/Tag/Sync/:Id', function(response, request) {
	throw "Route yet to be defined"
})


module.exports = route
