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
     * @property id: Id of a single work-journal (employees can have many)
     * @property employee_id: Id of the employee that owns the work journal
     * @property name: The name of the work journal
     */
    exports.tablename = 'workjournal';
    var Workjournal = (function () {
        function Workjournal(id, employee_id, name) {
            this.id = id;
            this.employee_id = employee_id;
            this.name = name;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Workjournal;
    }());
    exports["default"] = Workjournal;
    Workjournal.Delete = Data.Delete.bind(Workjournal.Delete);
    Workjournal.prototype.tablename = exports.tablename;
    Workjournal.Page = Data.Page.bind(Workjournal.Page);
    Workjournal.List = Data.List.bind(Workjournal.List);
    Workjournal.Save = Data.Save.bind(Workjournal.Save);
    Workjournal.Sync = Data.Sync.bind(Workjournal.Sync);
    Workjournal.Search = Data.Search.bind(Workjournal.Search);
    Workjournal.Update = Data.Update.bind(Workjournal.Update);
});
