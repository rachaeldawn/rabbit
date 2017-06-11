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
    exports.tablename = 'message';
    var Message = (function () {
        function Message(id, conversation_id, sender_id, message) {
            this.id = id;
            this.conversation_id = conversation_id;
            this.sender_id = sender_id;
            this.message = message;
        }
        return Message;
    }());
    exports["default"] = Message;
});
