"use strict";
exports.__esModule = true;
var BulletStats = (function () {
    function BulletStats(id, like_count, reply_count) {
        this.tablename = 'bullet_stats';
        this.id = id;
        this.like_count = like_count;
        this.reply_count = reply_count;
    }
    return BulletStats;
}());
exports["default"] = BulletStats;
BulletStats.prototype.tablename = 'bullet_stats';
