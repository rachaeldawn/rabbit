/*
 * @property message_id: References the message this receipt belongs to. First part to composite key.
 * @property recipient_id: The recipient receiving the message. Second part to composite key.
 * @property received: Timestamp of when the message was received by the user. Null if not received by them.
 * @property read: Timestamp of when the message was read by the user. Null if not read.
 */
class MessageReceipt {
	constructor(message_id, recipient_id, received, read){
		this.message_id = message_id
		this.recipient_id = recipient_id
		this.received = received
		this.read = read
		this.tablename = 'message_receipt'
	}
}
module.exports = MessageReceipt
