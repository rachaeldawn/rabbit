/*
 * @property id: The id of the entry of the tasklist
 * @property board_id: The id of the board this tasklist belongs to
 * @property name: A 255 character long tasklist name (the card title)
 */
export default class Tasklist {
	constructor(id, board_id, name){
	this.tablename = 'tasklist'
		this.id = id
		this.board_id = board_id
		this.name = name
	}
}

Tasklist.prototype.tablename = 'tasklist'
