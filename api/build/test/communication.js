var CommunicationController = require("../controllers/communication");
describe('#CommunicationController', function () {
    describe("SendMessage", function () {
        it("Undefined if user does not exist");
        it("Undefined if conversation does not exist");
        it("Refuses if message is too long");
        it("Refuses if user is not part of the conversation");
        it("Refuses if the message is empty");
        it("Makes necessary notifications");
        it("Sends the message");
    });
    describe("CreateReceiptsForMessage", function () {
        it("Refuses if id is not set");
        it("Undefined if conversation does not exist");
        it("Creates receipts for all users in conversation");
    });
    describe("GetConversation", function () {
        it("Undefined if conversation does not exist");
        it("Refuses if user is not part of the conversation");
        it("Retrieves conversation");
        it("Retrieves a page of messages (50) bolted onto the conversation");
        it("Final 4 messages have receipts");
    });
    describe("ListConversations", function () {
        it("Gets list of conversations");
        it("Gets only conversations for the user");
        it("Retrieves a page of messages (50) bolted onto each conversation");
        it("Undefined if user does not exist");
        it("Returns quantity of conversations or less");
        it("Final 4 messages have receipts");
    });
    describe("PageConversations", function () {
        it("Gets list of conversations");
        it("Gets only conversations for the user");
        it("Retrieves a page of messages (50) bolted onto each conversation");
        it("Undefined if user does not exist");
        it("Returns quantity of conversations or less");
        it("Final 4 messages have receipts");
    });
    describe("ListMessages", function () {
        it("Gets list of messages");
        it("Gets only the messages for the user");
        it("Gets only the messages in the conversation");
        it("Sets messages as received for user");
        it("Final 4 messages have receipts");
        it("Refuses if the user is not part of the conversation the message is in");
    });
    describe("PageMessages", function () {
        it("Gets a page of messages");
        it("Correct amount of messages (less than or equal)");
        it("Correct offset of messages (final page, or correct page)");
        it("Refuses if the user is not part of the conversation the message is in");
        it("Final 4 messages have receipts");
        it("Sets messages as received for user");
    });
    describe("GetReceipts", function () {
        it("Gets receipts for only the message");
        it("Gets receipt for only the user");
        it("Refuses if the user is not part of the conversation the message is in");
        it("Returns receipts for message");
    });
    describe("AddParticipant", function () {
        it("Undefined users that do not exist");
        it("Refuses if adder is not part of the conversation");
        it("Ignores if the user is already part of the conversation");
        it("Adds user to the conversation");
    });
    describe("SetMessageReceived", function () {
        it("Undefined if user does not exist");
        it("Undefined if message does not exist");
        it("Refuses if the user is not part of the conversation the message is in");
        it("Sets the message as read");
    });
    describe("GetParticipants", function () {
        it("Undefined if the conversation or user does not exist");
        it("Reject if user is not in the conversation");
        it("Returns every other participant than user");
        it("Returns array of ConversationParticipants");
    });
    describe("SetAllMessagesRead", function () {
        it("Undefined if conversation does not exist");
        it("Undefined if user does not exist");
        it("Sets all messages read in conversation");
    });
    describe("GetUnreadConversations", function () {
        it("Correct offset");
        it("Only gets messages for this user");
        it("Gets correct amount (retrieved <= amt)");
        it("ignores non-existent users");
        it("Gets only conversations for the user");
    });
});
