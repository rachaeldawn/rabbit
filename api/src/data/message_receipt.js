var Data = require("../data")
/*
 * @property message_id: References the message this receipt belongs to. First part to composite key.
 * @property recipient_id: The recipient receiving the message. Second part to composite key.
 * @property received: Timestamp of when the message was received by the user. Null if not received by them.
 * @property read: Timestamp of when the message was read by the user. Null if not read.
 */
const tablename = 'message_receipt'
class MessageReceipt {
	constructor(message_id, recipient_id, received, read){
		this.message_id = message_id
		this.recipient_id = recipient_id
		this.received = received
		this.read = read
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

MessageReceipt.prototype.tablename = tablename
MessageReceipt.Delete = Data.Delete.bind(MessageReceipt.Delete)
MessageReceipt.Page = Data.Page.bind(MessageReceipt.Page)
MessageReceipt.List = Data.List.bind(MessageReceipt.List)
MessageReceipt.Save = Data.Save.bind(MessageReceipt.Save)
MessageReceipt.Sync = Data.Sync.bind(MessageReceipt.Sync)
MessageReceipt.Search = Data.Search.bind(MessageReceipt.Search)
MessageReceipt.Update = Data.Update.bind(MessageReceipt.Update)
module.exports = MessageReceipt
module.exports.tablename = tablename
