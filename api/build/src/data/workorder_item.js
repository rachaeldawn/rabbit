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
     * @property id: Id of an item on a workorder
     * @property workorder_id: Id of the workorder this item belongs to
     * @property service_id: Id of this item
     * @property quantity: The quantity of this item
     */
    exports.tablename = 'workorder_item';
    var WorkorderItem = (function () {
        function WorkorderItem(id, workorder_id, service_id, quantity) {
            this.id = id;
            this.workorder_id = workorder_id;
            this.service_id = service_id;
            this.quantity = quantity;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return WorkorderItem;
    }());
    exports["default"] = WorkorderItem;
    WorkorderItem.Delete = Data.Delete.bind(WorkorderItem.Delete);
    WorkorderItem.prototype.tablename = exports.tablename;
    WorkorderItem.Page = Data.Page.bind(WorkorderItem.Page);
    WorkorderItem.List = Data.List.bind(WorkorderItem.List);
    WorkorderItem.Save = Data.Save.bind(WorkorderItem.Save);
    WorkorderItem.Sync = Data.Sync.bind(WorkorderItem.Sync);
    WorkorderItem.Search = Data.Search.bind(WorkorderItem.Search);
    WorkorderItem.Update = Data.Update.bind(WorkorderItem.Update);
});
