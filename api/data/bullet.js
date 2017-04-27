/*
 * @property id: The id of the specfic sticky note
 * @property user_id: The id of the user that made the sticky note
 * @property message: A max 1200 character message for the bulletin board. Minimum 5 characters
 * @property time_stamp: A timestamp of when the sticky note was created
 */
class Bullet {
	constructor(id, user_id, message, time_stamp){
		this.id = id
		this.user_id = user_id
		this.message = message
		this.time_stamp = time_stamp
	}
}
module.exports = Bullet
module.exports.tableName = 'bullet'
