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
    exports.tablename = 'employee';
    var Employee = (function () {
        function Employee(id, first_name, middle_name, last_name, phone, about, home_address, postal_code, sin, birthday, is_active) {
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
});
