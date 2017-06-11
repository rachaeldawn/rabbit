"use strict";
exports.__esModule = true;
exports.tablename = 'workorder_contact';
var WorkorderContact = (function () {
    function WorkorderContact(id, workorder_id, contact_id) {
        this.id = id;
        this.workorder_id = workorder_id;
        this.contact_id = contact_id;
    }
    return WorkorderContact;
}());
exports["default"] = WorkorderContact;
