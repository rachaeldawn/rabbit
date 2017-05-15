/*
 * @property id: Id of an entry for contact to be bound with the workorder
 * @property workorder_id: Id of the workorder to be bound
 * @property contact_id: The id of the customer contact to be bound
 */
var tablename = 'workorder_contact';
var WorkorderContact = (function () {
    function WorkorderContact(id, workorder_id, contact_id) {
        this.id = id;
        this.workorder_id = workorder_id;
        this.contact_id = contact_id;
    }
    return WorkorderContact;
}());
WorkorderContact.prototype.tablename = tablename;
module.exports = WorkorderContact;
module.exports.tablename = tablename;
//# sourceMappingURL=workorder_contact.js.map