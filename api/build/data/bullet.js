"use strict";
exports.__esModule = true;
var Bullet = (function () {
    function Bullet(id, user_id, message, time_stamp) {
        this.tablename = 'bullet';
        this.id = id;
        this.user_id = user_id;
        this.message = message;
        this.time_stamp = time_stamp;
    }
    return Bullet;
}());
exports["default"] = Bullet;
Bullet.prototype.tablename = 'bullet';
