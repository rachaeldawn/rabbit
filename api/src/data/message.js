var Data = require("../data")
/*
 * @property id: Identifier of a single message
 * @property conversation_id: Id of the conversation this message is in.
 * @property sender_id: The user_account id of the person who sent the message
 * @property message: The message (max 2400 characters)
 */
const tablename = 'message'
class Message {
	constructor(id, conversation_id, sender_id, message){
		this.id = id
		this.conversation_id = conversation_id
		this.sender_id = sender_id
		this.message = message
		this.Update = Data.Update.bind(this.Update, this)
		this.Sync = Data.Sync.bind(this.Sync, this)
		this.Save = Data.Save.bind(this.Save, this)
		this.Delete = Data.Delete.bind(this.Delete, this)
	}
}

Message.prototype.tablename = tablename
Message.Delete = Data.Delete.bind(Message.Delete)
Message.Page = Data.Page.bind(Message.Page)
Message.List = Data.List.bind(Message.List)
Message.Save = Data.Save.bind(Message.Save)
Message.Sync = Data.Sync.bind(Message.Sync)
Message.Search = Data.Search.bind(Message.Search)
Message.Update = Data.Update.bind(Message.Update)
module.exports = Message
module.exports.tablename = tablename
