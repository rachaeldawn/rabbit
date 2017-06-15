"use strict";
exports.__esModule = true;
exports.tablename = 'bullet_comment';
var BulletComment = (function () {
    function BulletComment(id, bullet_id, user_id, message, time_stamp) {
        this.id = id;
        this.bullet_id = bullet_id;
        this.user_id = user_id;
        this.message = message;
        this.time_stamp = time_stamp;
    }
    return BulletComment;
}());
exports["default"] = BulletComment;
