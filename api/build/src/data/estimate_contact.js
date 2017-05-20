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
     * @property id: Id of  this specific entry
     * @property estimate_id: The id of the estimate this is attached to
     * @property contact_id: The id of the contact that we are working with
     */
    exports.tablename = 'estimate_contact';
    var EstimateContact = (function () {
        function EstimateContact(id, estimate_id, contact_id) {
            this.id = id;
            this.estimate_id = estimate_id;
            this.contact_id = contact_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return EstimateContact;
    }());
    exports["default"] = EstimateContact;
    EstimateContact.Delete = Data.Delete.bind(EstimateContact.Delete);
    EstimateContact.prototype.tablename = exports.tablename;
    EstimateContact.Page = Data.Page.bind(EstimateContact.Page);
    EstimateContact.List = Data.List.bind(EstimateContact.List);
    EstimateContact.Save = Data.Save.bind(EstimateContact.Save);
    EstimateContact.Sync = Data.Sync.bind(EstimateContact.Sync);
    EstimateContact.Search = Data.Search.bind(EstimateContact.Search);
    EstimateContact.Update = Data.Update.bind(EstimateContact.Update);
});
