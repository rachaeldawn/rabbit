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
    exports.tablename = 'taskboard';
    var Taskboard = (function () {
        function Taskboard(id, name, creator_id) {
            this.id = id;
            this.name = name;
            this.creator_id = creator_id;
        }
        return Taskboard;
    }());
    exports["default"] = Taskboard;
});
