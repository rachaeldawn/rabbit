"use strict";
exports.__esModule = true;
var EstimateContact = (function () {
    function EstimateContact(id, estimate_id, contact_id) {
        this.tablename = 'estimate_contact';
        this.id = id;
        this.estimate_id = estimate_id;
        this.contact_id = contact_id;
    }
    return EstimateContact;
}());
exports["default"] = EstimateContact;
EstimateContact.prototype.tablename = 'estimate_contact';
