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
     * @property id: Id of an entry for contact to be bound with the workorder
     * @property workorder_id: Id of the workorder to be bound
     * @property contact_id: The id of the customer contact to be bound
     */
    exports.tablename = 'workorder_contact';
    var WorkorderContact = (function () {
        function WorkorderContact(id, workorder_id, contact_id) {
            this.id = id;
            this.workorder_id = workorder_id;
            this.contact_id = contact_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return WorkorderContact;
    }());
    exports["default"] = WorkorderContact;
    WorkorderContact.Delete = Data.Delete.bind(WorkorderContact.Delete);
    WorkorderContact.prototype.tablename = exports.tablename;
    WorkorderContact.Page = Data.Page.bind(WorkorderContact.Page);
    WorkorderContact.List = Data.List.bind(WorkorderContact.List);
    WorkorderContact.Save = Data.Save.bind(WorkorderContact.Save);
    WorkorderContact.Sync = Data.Sync.bind(WorkorderContact.Sync);
    WorkorderContact.Search = Data.Search.bind(WorkorderContact.Search);
    WorkorderContact.Update = Data.Update.bind(WorkorderContact.Update);
});
