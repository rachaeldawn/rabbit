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
     * @property id: Id of  this specific taskboard entry
     * @property name: The nickname the employee gives to the taskboard
     * @property creator_id: The id of the employee that created the taskboard.
     */
    exports.tablename = 'taskboard';
    var Taskboard = (function () {
        function Taskboard(id, name, creator_id) {
            this.id = id;
            this.name = name;
            this.creator_id = creator_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Taskboard;
    }());
    exports["default"] = Taskboard;
    Taskboard.Delete = Data.Delete.bind(Taskboard.Delete);
    Taskboard.prototype.tablename = exports.tablename;
    Taskboard.Page = Data.Page.bind(Taskboard.Page);
    Taskboard.List = Data.List.bind(Taskboard.List);
    Taskboard.Save = Data.Save.bind(Taskboard.Save);
    Taskboard.Sync = Data.Sync.bind(Taskboard.Sync);
    Taskboard.Search = Data.Search.bind(Taskboard.Search);
    Taskboard.Update = Data.Update.bind(Taskboard.Update);
});
