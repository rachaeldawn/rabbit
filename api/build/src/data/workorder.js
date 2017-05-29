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
     * @property id: The Id of a specific workorder
     * @property customer_id: The customer_id attached to the workorder
     * @property rep_id: The id of the employee that opened the workorder
     * @property open_date: Timestamp that defaults to now
     * @property close_date: The timestamp of when the workorder was closed.
     */
    exports.tablename = 'workorder';
    var Workorder = (function () {
        function Workorder(id, customer_id, rep_id, open_date, close_date) {
            this.id = id;
            this.customer_id = customer_id;
            this.rep_id = rep_id;
            this.open_date = open_date;
            this.close_date = close_date;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Workorder;
    }());
    exports["default"] = Workorder;
    Workorder.Delete = Data.Delete.bind(Workorder.Delete);
    Workorder.prototype.tablename = exports.tablename;
    Workorder.Page = Data.Page.bind(Workorder.Page);
    Workorder.List = Data.List.bind(Workorder.List);
    Workorder.Save = Data.Save.bind(Workorder.Save);
    Workorder.Sync = Data.Sync.bind(Workorder.Sync);
    Workorder.Search = Data.Search.bind(Workorder.Search);
    Workorder.Update = Data.Update.bind(Workorder.Update);
});
