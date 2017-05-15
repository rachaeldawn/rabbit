/*
 * @property id: The id of the entry of the tasklist
 * @property board_id: The id of the board this tasklist belongs to
 */
var tablename = 'tasklist';
var Tasklist = (function () {
    function Tasklist(id, board_id) {
        this.id = id;
        this.board_id = board_id;
    }
    return Tasklist;
}());
Tasklist.prototype.tablename = tablename;
module.exports = Tasklist;
module.exports.tablename = tablename;
//# sourceMappingURL=tasklist.js.map