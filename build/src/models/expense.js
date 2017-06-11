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
    exports.tablename = 'expense';
    var Expense = (function () {
        function Expense(id, name, description, is_active) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.is_active = is_active;
        }
        return Expense;
    }());
    exports["default"] = Expense;
});
