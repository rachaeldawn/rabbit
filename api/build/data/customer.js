"use strict";
exports.__esModule = true;
var Customer = (function () {
    function Customer(id, company_name, mailing_address, mailing_postal_code, mailing_country, physical_address, physical_postal_code, physical_country, phone, start_date) {
        this.tablename = 'customer';
        this.id = id;
        this.company_name = company_name;
        this.mailing_address = mailing_address;
        this.mailing_postal_code = mailing_postal_code;
        this.mailing_country = mailing_country;
        this.physical_address = physical_address;
        this.physical_postal_code = physical_postal_code;
        this.physical_country = physical_country;
        this.phone = phone;
        this.start_date = start_date;
    }
    return Customer;
}());
exports["default"] = Customer;
Customer.prototype.tablename = 'customer';
