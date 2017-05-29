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
    /*
     * Exported Functions:
     * 	SendMessage: To send a message to another user. Note: Receipts in conversation should be created too.
     * 	CreateReceiptsForMessage: Creates the receipts in a conversation for the messages
     * 	GetConversation: Retrieves a single conversation
     * 	ListConversations: Gets a list of conversations related to the user
     * 	PageConversations: Gets a page of conversations related to the user
     * 	ListMessages: Gets just the messages for a single conversation
     * 	PageMessages: Gets a page of messages for a single conversation
     * 	GetReceipts: Gets receipts for a message
     * 	AddParticipant: Adds a participant to a conversation
     * 	SetMessageReceived: Sets a single message as read
     * 	GetParticipants: Retrieves the participants in the conversation. Returns ConversationParticipant[]
     * 	SetAllMessagesRead: Sets all of the messages in the conversation as being read
     * 	GetUnreadConversations: Gets a page of unread conversations
     * Private Functions:
     */
    /*
     * Purpose: To send a message to another user. Note: Receipts in conversation should be created too.
     * @param sender: The person that is sending the message (default: undefined)
     * @param conversation: the id or conversation object to send the message to (default: undefined)
     * @param msg: The message the user has sent (default: undefined)
     */
    function SendMessage(sender, conversation, msg) {
        throw 'Not implemented';
    }
    exports.SendMessage = SendMessage;
    /*
     * Purpose: Creates the receipts in a conversation for the messages
     * @param message: The id or the message object to create receipts for (default: undefined)
     * @param conversation: The id or the Conversation object to create receipts for (default: undefined)
     */
    function CreateReceiptsForMessage(message, conversation) {
        throw 'Not implemented';
    }
    exports.CreateReceiptsForMessage = CreateReceiptsForMessage;
    /*
     * Purpose: Retrieves a single conversation
     * @param user: The user requesting the conversation (default: undefined)
     * @param conversation: The object to retrieve the conversation (just use sync) (default: undefined)
     */
    function GetConversation(user, conversation) {
        throw 'Not implemented';
    }
    exports.GetConversation = GetConversation;
    /*
     * Purpose: Gets a list of conversations related to the user
     * @param userId: The user to get a list of conversations for (default: undefined)
     * @param amt: The quantity of conversations to get (max 20) (default: 20)
     */
    function ListConversations(userId, amt) {
        if (amt === void 0) { amt = 20; }
        throw 'Not implemented';
    }
    exports.ListConversations = ListConversations;
    /*
     * Purpose: Gets a page of conversations related to the user
     * @param userId: The user to get a page of conversations for (default: undefined)
     * @param amt: The amount of conversations to get (default: undefined)
     * @param page: The page number (default: 1)
     */
    function PageConversations(userId, amt, page) {
        if (page === void 0) { page = 1; }
        throw 'Not implemented';
    }
    exports.PageConversations = PageConversations;
    /*
     * Purpose: Gets just the messages for a single conversation
     * @param conversation: The id or Conversation (default: undefined)
     * @param user: The id or User to get the messages in a conversation for (default: undefined)
     */
    function ListMessages(conversation, user) {
        throw 'Not implemented';
    }
    exports.ListMessages = ListMessages;
    /*
     * Purpose: Gets a page of messages for a single conversation
     * @param user: The id or user to get a page of messages for (default: undefined)
     * @param amt: The number of messages to get in the conversation (default: undefined)
     * @param page: The page number (default: 1)
     */
    function PageMessages(user, amt, page) {
        if (page === void 0) { page = 1; }
        throw 'Not implemented';
    }
    exports.PageMessages = PageMessages;
    /*
     * Purpose: Gets receipts for a message
     * @param user: The user to get the receipts for (default: undefined)
     * @param message: The message to get the receipt(s) for (default: undefined)
     */
    function GetReceipts(user, message) {
        throw 'Not implemented';
    }
    exports.GetReceipts = GetReceipts;
    /*
     * Purpose: Adds a participant to a conversation
     * @param user: The user being added (default: undefined)
     * @param conversation: The conversation to be added to (default: undefined)
     * @param adder: The person adding the other to the conversation (default: undefined)
     */
    function AddParticipant(user, conversation, adder) {
        throw 'Not implemented';
    }
    exports.AddParticipant = AddParticipant;
    /*
     * Purpose: Sets a single message as read
     * @param message: The message to be set as read (default: undefined)
     * @param user: The user that read it (default: undefined)
     */
    function SetMessageReceived(message, user) {
        throw 'Not implemented';
    }
    exports.SetMessageReceived = SetMessageReceived;
    /*
     * Purpose: Retrieves the participants in the conversation. Returns ConversationParticipant[]
     * @param user: The id or user to get the conversation for. (default: undefined)
     * @param conversation: The conversation to get the participants for (default: undefined)
     */
    function GetParticipants(user, conversation) {
        throw 'Not implemented';
    }
    exports.GetParticipants = GetParticipants;
    /*
     * Purpose: Sets all of the messages in the conversation as being read
     * @param user: The id or user object to have 'read' the messages (default: undefined)
     * @param conversation: the id or conversation to have the messages set to read (default: undefined)
     */
    function SetAllMessagesRead(user, conversation) {
        throw 'Not implemented';
    }
    exports.SetAllMessagesRead = SetAllMessagesRead;
    /*
     * Purpose: Gets a page of unread conversations
     * @param user: The id or user object to get the read messages for (default: undefined)
     * @param amt: The amount of unread conversations (with messages) to get (default: 25)
     * @param page: The page number of conversations to get (rare to use) (default: 0)
     */
    function GetUnreadConversations(user, amt, page) {
        if (amt === void 0) { amt = 25; }
        if (page === void 0) { page = 0; }
        throw 'Not implemented';
    }
    exports.GetUnreadConversations = GetUnreadConversations;
});
