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
    function SendMessage(sender, conversation, msg) {
        throw 'Not implemented';
    }
    exports.SendMessage = SendMessage;
    function CreateReceiptsForMessage(message, conversation) {
        throw 'Not implemented';
    }
    exports.CreateReceiptsForMessage = CreateReceiptsForMessage;
    function GetConversation(user, conversation) {
        throw 'Not implemented';
    }
    exports.GetConversation = GetConversation;
    function ListConversations(userId, amt) {
        if (amt === void 0) { amt = 20; }
        throw 'Not implemented';
    }
    exports.ListConversations = ListConversations;
    function PageConversations(userId, amt, page) {
        if (page === void 0) { page = 1; }
        throw 'Not implemented';
    }
    exports.PageConversations = PageConversations;
    function ListMessages(conversation, user) {
        throw 'Not implemented';
    }
    exports.ListMessages = ListMessages;
    function PageMessages(user, amt, page) {
        if (page === void 0) { page = 1; }
        throw 'Not implemented';
    }
    exports.PageMessages = PageMessages;
    function GetReceipts(user, message) {
        throw 'Not implemented';
    }
    exports.GetReceipts = GetReceipts;
    function AddParticipant(user, conversation, adder) {
        throw 'Not implemented';
    }
    exports.AddParticipant = AddParticipant;
    function SetMessageReceived(message, user) {
        throw 'Not implemented';
    }
    exports.SetMessageReceived = SetMessageReceived;
    function GetParticipants(user, conversation) {
        throw 'Not implemented';
    }
    exports.GetParticipants = GetParticipants;
    function SetAllMessagesRead(user, conversation) {
        throw 'Not implemented';
    }
    exports.SetAllMessagesRead = SetAllMessagesRead;
    function GetUnreadConversations(user, amt, page) {
        if (amt === void 0) { amt = 25; }
        throw 'Not implemented';
    }
    exports.GetUnreadConversations = GetUnreadConversations;
});
