(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Data = require("../data");
    /*
     * @property id: References the user account associated with this contact. 1-1 Relationship.
     * @property first_name: First name of the contact
     * @property last_name: Last name of the contact
     * @property phone: Phone number of the contact
     * @property phone_extension: The phone extension of the contact
     * @property about: A max 2000 character length about to describe who the contact is, what they're permitted to authorize/do, and any other relevant details.
     */
    exports.tablename = 'customer_contact';
    var CustomerContact = (function () {
        function CustomerContact(id, first_name, last_name, phone, phone_extension, about) {
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.phone = phone;
            this.phone_extension = phone_extension;
            this.about = about;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return CustomerContact;
    }());
    exports["default"] = CustomerContact;
    CustomerContact.Delete = Data.Delete.bind(CustomerContact.Delete);
    CustomerContact.prototype.tablename = exports.tablename;
    CustomerContact.Page = Data.Page.bind(CustomerContact.Page);
    CustomerContact.List = Data.List.bind(CustomerContact.List);
    CustomerContact.Save = Data.Save.bind(CustomerContact.Save);
    CustomerContact.Sync = Data.Sync.bind(CustomerContact.Sync);
    CustomerContact.Search = Data.Search.bind(CustomerContact.Search);
    CustomerContact.Update = Data.Update.bind(CustomerContact.Update);
});