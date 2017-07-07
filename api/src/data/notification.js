/*
 * @property id: The id of the notification object
 * @property user_id: The user id the notification belongs to
 * @property origin: A max 400 character long string indicating to the system where the notification came from
 * @property message: A max 400 character long string indicating what the notification is (shown to user)
 */
export default class Notification {
	constructor(id, user_id, origin, message){
	this.tablename = 'notification'
		this.id = id
		this.user_id = user_id
		this.origin = origin
		this.message = message
	}
}

Notification.prototype.tablename = 'notification'
