"use strict";
exports.__esModule = true;
var WorkorderContact = (function () {
    function WorkorderContact(id, workorder_id, contact_id) {
        this.tablename = 'workorder_contact';
        this.id = id;
        this.workorder_id = workorder_id;
        this.contact_id = contact_id;
    }
    return WorkorderContact;
}());
exports["default"] = WorkorderContact;
WorkorderContact.prototype.tablename = 'workorder_contact';
