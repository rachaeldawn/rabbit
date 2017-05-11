/*
 * @property id: The id of the entry of the tasklist
 * @property board_id: The id of the board this tasklist belongs to
 */
const tablename = 'tasklist'
class Tasklist {
	constructor(id, board_id){
		this.id = id
		this.board_id = board_id
		this.tablename = 'tasklist'
	}
}
Tasklist.prototype.tablename = 'tasklist'
module.exports = Tasklist
module.exports.tablename = tablename
