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
     * @property id: The id of the tag-expense pair
     * @property expense_id: The id of the expense to be tagged
     * @property tag_id: The tag id to be bound
     */
    exports.tablename = 'expense_tag';
    var ExpenseTag = (function () {
        function ExpenseTag(id, expense_id, tag_id) {
            this.id = id;
            this.expense_id = expense_id;
            this.tag_id = tag_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return ExpenseTag;
    }());
    exports["default"] = ExpenseTag;
    ExpenseTag.Delete = Data.Delete.bind(ExpenseTag.Delete);
    ExpenseTag.prototype.tablename = exports.tablename;
    ExpenseTag.Page = Data.Page.bind(ExpenseTag.Page);
    ExpenseTag.List = Data.List.bind(ExpenseTag.List);
    ExpenseTag.Save = Data.Save.bind(ExpenseTag.Save);
    ExpenseTag.Sync = Data.Sync.bind(ExpenseTag.Sync);
    ExpenseTag.Search = Data.Search.bind(ExpenseTag.Search);
    ExpenseTag.Update = Data.Update.bind(ExpenseTag.Update);
});
