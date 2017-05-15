var _ = require("lodash");
var auth = require("../auth");
var data = require("../data");
var Asset = require("../data/asset");
var AssetTag = require("../data/asset_tag");
var route = require('express').Router();
/*
 * /New
 * Method: post
 * Remarks: Create a new asset
 */
route.post('/New', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Update
 * Method: post
 * Remarks: Update an existing asset
 */
route.post('/Update', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Sync
 * Method: post
 * Remarks: Pull an asset from the database
 */
route.post('/Sync', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Sync/:Id
 * Method: post
 * Remarks: Pull an asset from the database based on id
 */
route.post('/Sync/:Id', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Archive
 * Method: post
 * Remarks: Archive an asset
 */
route.post('/Archive', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Archive/:Id
 * Method: post
 * Remarks: Archive an asset
 */
route.post('/Archive/:Id', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Page
 * Method: post
 * Remarks: Uses a JSON object to get a page of assets
 */
route.post('/Page', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Page/:Amount/:Page
 * Method: post
 * Remarks: Get a page of assets
 */
route.post('/Page/:Amount/:Page', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /List/:Amount
 * Method: post
 * Remarks: Lists an amount of assets
 */
route.post('/List/:Amount', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /List/Tag/:Amount
 * Method: post
 * Remarks: List of all asset tags
 */
route.post('/List/Tag/:Amount', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/New
 * Method: post
 * Remarks: Tags an asset
 */
route.post('/Tag/New', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/List
 * Method: post
 * Remarks: List of tagged assets
 */
route.post('/Tag/List', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/List/:Amount
 * Method: post
 * Remarks: List amount of tagged assets
 */
route.post('/Tag/List/:Amount', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/Page/:Amount
 * Method: post
 * Remarks: Page of assets that are tagged
 */
route.post('/Tag/Page/:Amount', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/Delete
 * Method: post
 * Remarks: Deletes a tag
 */
route.post('/Tag/Delete', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/Update
 * Method: post
 * Remarks: Updates an asset's tag
 */
route.post('/Tag/Update', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/Sync
 * Method: post
 * Remarks: Pulls an asset's tag from the DB
 */
route.post('/Tag/Sync', function (response, request) {
    throw "Route yet to be defined";
});
/*
 * /Tag/Sync/:Id
 * Method: post
 * Remarks: Pulls an asset's tag based an asset's id from the database
 */
route.post('/Tag/Sync/:Id', function (response, request) {
    throw "Route yet to be defined";
});
module.exports = route;
//# sourceMappingURL=assetRouter.js.map