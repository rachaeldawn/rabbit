"use strict";
exports.__esModule = true;
var CustomerContact = (function () {
    function CustomerContact(id, first_name, last_name, phone, phone_extension, about, is_deleted) {
        this.tablename = 'customer_contact';
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.phone = phone;
        this.phone_extension = phone_extension;
        this.about = about;
        this.is_deleted = is_deleted;
    }
    return CustomerContact;
}());
exports["default"] = CustomerContact;
CustomerContact.prototype.tablename = 'customer_contact';
