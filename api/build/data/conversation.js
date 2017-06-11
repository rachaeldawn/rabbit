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
    exports.tablename = 'conversation';
    var Conversation = (function () {
        function Conversation(id, creator_id) {
            this.id = id;
            this.creator_id = creator_id;
        }
        return Conversation;
    }());
    exports["default"] = Conversation;
});
