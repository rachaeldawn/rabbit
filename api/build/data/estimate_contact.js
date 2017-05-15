/*
 * @property id: Id of  this specific entry
 * @property estimate_id: The id of the estimate this is attached to
 * @property contact_id: The id of the contact that we are working with
 */
var tablename = 'estimate_contact';
var EstimateContact = (function () {
    function EstimateContact(id, estimate_id, contact_id) {
        this.id = id;
        this.estimate_id = estimate_id;
        this.contact_id = contact_id;
    }
    return EstimateContact;
}());
EstimateContact.prototype.tablename = tablename;
module.exports = EstimateContact;
module.exports.tablename = tablename;
//# sourceMappingURL=estimate_contact.js.map