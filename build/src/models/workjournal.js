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
    exports.tablename = 'workjournal';
    var Workjournal = (function () {
        function Workjournal(id, employee_id, name) {
            this.id = id;
            this.employee_id = employee_id;
            this.name = name;
        }
        return Workjournal;
    }());
    exports["default"] = Workjournal;
});
