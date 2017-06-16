/*
 * @property id: The id of the stats. 1-1 relationship bullet
 * @property like_count: The amount of likes there are on the bullet
 * @property reply_count: The amount of replies on the bullet
 */
export const tablename = 'bullet_stats'
export default class BulletStats {
	constructor(id, like_count, reply_count){
		this.id = id
		this.like_count = like_count
		this.reply_count = reply_count
	}
}

