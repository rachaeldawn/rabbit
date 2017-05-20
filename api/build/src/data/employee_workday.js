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
     * @property id: Id of a single workday
     * @property employee_id: The Id of the employee
     * @property clock_in: When the employee clocks in
     * @property clock_out: When the employee clocks out
     */
    exports.tablename = 'employee_workday';
    var EmployeeWorkday = (function () {
        function EmployeeWorkday(id, employee_id, clock_in, clock_out) {
            this.id = id;
            this.employee_id = employee_id;
            this.clock_in = clock_in;
            this.clock_out = clock_out;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return EmployeeWorkday;
    }());
    exports["default"] = EmployeeWorkday;
    EmployeeWorkday.Delete = Data.Delete.bind(EmployeeWorkday.Delete);
    EmployeeWorkday.prototype.tablename = exports.tablename;
    EmployeeWorkday.Page = Data.Page.bind(EmployeeWorkday.Page);
    EmployeeWorkday.List = Data.List.bind(EmployeeWorkday.List);
    EmployeeWorkday.Save = Data.Save.bind(EmployeeWorkday.Save);
    EmployeeWorkday.Sync = Data.Sync.bind(EmployeeWorkday.Sync);
    EmployeeWorkday.Search = Data.Search.bind(EmployeeWorkday.Search);
    EmployeeWorkday.Update = Data.Update.bind(EmployeeWorkday.Update);
});
