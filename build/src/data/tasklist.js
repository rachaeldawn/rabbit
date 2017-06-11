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
    exports.tablename = 'tasklist';
    var Tasklist = (function () {
        function Tasklist(id, board_id, name) {
            this.id = id;
            this.board_id = board_id;
            this.name = name;
        }
        return Tasklist;
    }());
    exports["default"] = Tasklist;
});
