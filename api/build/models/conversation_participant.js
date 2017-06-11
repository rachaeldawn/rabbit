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
    exports.tablename = 'conversation_participant';
    var ConversationParticipant = (function () {
        function ConversationParticipant(id, user_id, conversation_id) {
            this.id = id;
            this.user_id = user_id;
            this.conversation_id = conversation_id;
        }
        return ConversationParticipant;
    }());
    exports["default"] = ConversationParticipant;
});
