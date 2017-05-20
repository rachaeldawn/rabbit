import {UserAccount as User} from "../data/user_account"
import Conversation from "../data/conversation"
import ConversationParticipant from "../data/conversation_participant"
import Message from "../data/message"
import MessageReceipt from "../data/message_receipt"


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
 * Private Functions: 
 */
/*
 * Purpose: To send a message to another user. Note: Receipts in conversation should be created too.
 * @param sender: The person that is sending the message (default: undefined)
 * @param conversation: the id or conversation object to send the message to (default: undefined)
 * @param msg: The message the user has sent (default: undefined)
 */
export function SendMessage(sender: number|User, conversation: number|Conversation, msg: string) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates the receipts in a conversation for the messages
 * @param message: The id or the message object to create receipts for (default: undefined)
 * @param conversation: The id or the Conversation object to create receipts for (default: undefined)
 */
export function CreateReceiptsForMessage(message: id|Message, conversation: number|Conversation) {
	throw 'Not implemented'
}
/*
 * Purpose: Retrieves a single conversation
 * @param user: The user requesting the conversation (default: undefined)
 * @param conversation: The object to retrieve the conversation (just use sync) (default: undefined)
 */
export function GetConversation(user: id|User, conversation: number|Conversation) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of conversations related to the user
 * @param userId: The user to get a list of conversations for (default: undefined)
 * @param amt: The quantity of conversations to get (max 20) (default: 20)
 */
export function ListConversations(userId: number|User, amt: number = 20) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of conversations related to the user
 * @param userId: The user to get a page of conversations for (default: undefined)
 * @param amt: The amount of conversations to get (default: undefined)
 * @param page: The page number (default: 1)
 */
export function PageConversations(userId: number|User, amt: number, page: number = 1) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets just the messages for a single conversation
 * @param conversation: The id or Conversation (default: undefined)
 * @param user: The id or User to get the messages in a conversation for (default: undefined)
 */
export function ListMessages(conversation: number|Conversation, user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of messages for a single conversation
 * @param user: The id or user to get a page of messages for (default: undefined)
 * @param amt: The number of messages to get in the conversation (default: undefined)
 * @param page: The page number (default: 1)
 */
export function PageMessages(user: number|User, amt: number, page: number = 1) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets receipts for a message
 * @param user: The user to get the receipts for (default: undefined)
 * @param message: The message to get the receipt(s) for (default: undefined)
 */
export function GetReceipts(user: number|User, message: number|Message) {
	throw 'Not implemented'
}
/*
 * Purpose: Adds a participant to a conversation
 * @param user: The user being added (default: undefined)
 * @param conversation: The conversation to be added to (default: undefined)
 * @param adder: The person adding the other to the conversation (default: undefined)
 */
export function AddParticipant(user: number|User, conversation: number|Conversation, adder: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets a single message as read
 * @param message: The message to be set as read (default: undefined)
 * @param user: The user that read it (default: undefined)
 */
export function SetMessageReceived(message: number|Message, user: number|User) {
	throw 'Not implemented'
}
/*
 * Purpose: Retrieves the participants in the conversation. Returns ConversationParticipant[]
 * @param user: The id or user to get the conversation for. (default: undefined)
 * @param conversation: The conversation to get the participants for (default: undefined)
 */
export function GetParticipants(user: number|User, conversation: number|Conversation) {
	throw 'Not implemented'
}
/*
 * Purpose: Sets all of the messages in the conversation as being read
 * @param user: The id or user object to have 'read' the messages (default: undefined)
 * @param conversation: the id or conversation to have the messages set to read (default: undefined)
 */
export function SetAllMessagesRead(user: number|User, conversation: number|Conversation) {
	throw 'Not implemented'
}


