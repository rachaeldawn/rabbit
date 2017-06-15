/*
 * @property id: The id of the comment
 * @property bullet_id: The id of the bullet this comment was posted on
 * @property user_id: The id of the user that posted this comment
 * @property message: A max 512 character long comment
 * @property time_stamp: When the comment was posted
 */
export const tablename = 'bullet_comment'
export default class BulletComment {
	constructor(id, bullet_id, user_id, message, time_stamp){
		this.id = id
		this.bullet_id = bullet_id
		this.user_id = user_id
		this.message = message
		this.time_stamp = time_stamp
	}
}

