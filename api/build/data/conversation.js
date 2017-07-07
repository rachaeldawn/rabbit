"use strict";
exports.__esModule = true;
var Conversation = (function () {
    function Conversation(id, creator_id) {
        this.tablename = 'conversation';
        this.id = id;
        this.creator_id = creator_id;
    }
    return Conversation;
}());
exports["default"] = Conversation;
Conversation.prototype.tablename = 'conversation';
