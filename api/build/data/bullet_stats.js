"use strict";
exports.__esModule = true;
exports.tablename = 'bullet_stats';
var BulletStats = (function () {
    function BulletStats(id, like_count, reply_count) {
        this.id = id;
        this.like_count = like_count;
        this.reply_count = reply_count;
    }
    return BulletStats;
}());
exports["default"] = BulletStats;
