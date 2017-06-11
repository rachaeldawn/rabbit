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
    exports.tablename = 'customer_contact';
    var CustomerContact = (function () {
        function CustomerContact(id, first_name, last_name, phone, phone_extension, about) {
            this.id = id;
            this.first_name = first_name;
            this.last_name = last_name;
            this.phone = phone;
            this.phone_extension = phone_extension;
            this.about = about;
        }
        return CustomerContact;
    }());
    exports["default"] = CustomerContact;
});
