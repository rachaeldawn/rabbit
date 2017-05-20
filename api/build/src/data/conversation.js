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
     * @property id: Identifier of a Conversation
     * @property creator_id: The Id matching a user_account table entry
     */
    exports.tablename = 'conversation';
    var Conversation = (function () {
        function Conversation(id, creator_id) {
            this.id = id;
            this.creator_id = creator_id;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Conversation;
    }());
    exports["default"] = Conversation;
    Conversation.Delete = Data.Delete.bind(Conversation.Delete);
    Conversation.prototype.tablename = exports.tablename;
    Conversation.Page = Data.Page.bind(Conversation.Page);
    Conversation.List = Data.List.bind(Conversation.List);
    Conversation.Save = Data.Save.bind(Conversation.Save);
    Conversation.Sync = Data.Sync.bind(Conversation.Sync);
    Conversation.Search = Data.Search.bind(Conversation.Search);
    Conversation.Update = Data.Update.bind(Conversation.Update);
});
