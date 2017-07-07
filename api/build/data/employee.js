"use strict";
exports.__esModule = true;
var Employee = (function () {
    function Employee(id, first_name, middle_name, last_name, phone, about, home_address, postal_code, sin, birthday, is_active) {
        this.tablename = 'employee';
        this.id = id;
        this.first_name = first_name;
        this.middle_name = middle_name;
        this.last_name = last_name;
        this.phone = phone;
        this.about = about;
        this.home_address = home_address;
        this.postal_code = postal_code;
        this.sin = sin;
        this.birthday = birthday;
        this.is_active = is_active;
    }
    return Employee;
}());
exports["default"] = Employee;
Employee.prototype.tablename = 'employee';
