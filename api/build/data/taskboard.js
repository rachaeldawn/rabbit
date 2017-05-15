/*
 * @property id: Id of  this specific taskboard entry
 * @property name: The nickname the employee gives to the taskboard
 * @property creator_id: The id of the employee that created the taskboard.
 */
var tablename = 'taskboard';
var Taskboard = (function () {
    function Taskboard(id, name, creator_id) {
        this.id = id;
        this.name = name;
        this.creator_id = creator_id;
    }
    return Taskboard;
}());
Taskboard.prototype.tablename = tablename;
module.exports = Taskboard;
module.exports.tablename = tablename;
//# sourceMappingURL=taskboard.js.map