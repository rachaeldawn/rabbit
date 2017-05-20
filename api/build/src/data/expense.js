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
     * @property id: The id of the expense
     * @property name: A max 64 character long name of the expense/bill
     * @property description: A max 300 character long description of the expense/bill
     * @property is_active: Whether or not the expense is still current.
     */
    exports.tablename = 'expense';
    var Expense = (function () {
        function Expense(id, name, description, is_active) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.is_active = is_active;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Expense;
    }());
    exports["default"] = Expense;
    Expense.Delete = Data.Delete.bind(Expense.Delete);
    Expense.prototype.tablename = exports.tablename;
    Expense.Page = Data.Page.bind(Expense.Page);
    Expense.List = Data.List.bind(Expense.List);
    Expense.Save = Data.Save.bind(Expense.Save);
    Expense.Sync = Data.Sync.bind(Expense.Sync);
    Expense.Search = Data.Search.bind(Expense.Search);
    Expense.Update = Data.Update.bind(Expense.Update);
});
