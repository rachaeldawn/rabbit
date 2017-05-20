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
     * @property message_id: References the message this receipt belongs to. First part to composite key.
     * @property recipient_id: The recipient receiving the message. Second part to composite key.
     * @property received: Timestamp of when the message was received by the user. Null if not received by them.
     * @property read: Timestamp of when the message was read by the user. Null if not read.
     */
    exports.tablename = 'message_receipt';
    var MessageReceipt = (function () {
        function MessageReceipt(message_id, recipient_id, received, read) {
            this.message_id = message_id;
            this.recipient_id = recipient_id;
            this.received = received;
            this.read = read;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return MessageReceipt;
    }());
    exports["default"] = MessageReceipt;
    MessageReceipt.Delete = Data.Delete.bind(MessageReceipt.Delete);
    MessageReceipt.prototype.tablename = exports.tablename;
    MessageReceipt.Page = Data.Page.bind(MessageReceipt.Page);
    MessageReceipt.List = Data.List.bind(MessageReceipt.List);
    MessageReceipt.Save = Data.Save.bind(MessageReceipt.Save);
    MessageReceipt.Sync = Data.Sync.bind(MessageReceipt.Sync);
    MessageReceipt.Search = Data.Search.bind(MessageReceipt.Search);
    MessageReceipt.Update = Data.Update.bind(MessageReceipt.Update);
});
