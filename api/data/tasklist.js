/*
 * @property id: The id of the entry of the tasklist
 * @property board_id: The id of the board this tasklist belongs to
 */
class Tasklist {
	constructor(id, board_id){
		this.id = id
		this.board_id = board_id
	}
}
module.exports = Tasklist
module.exports.tableName = 'tasklist'
