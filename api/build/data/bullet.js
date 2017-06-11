(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.tablename = 'bullet';
    var Bullet = (function () {
        function Bullet(id, user_id, message, time_stamp) {
            this.id = id;
            this.user_id = user_id;
            this.message = message;
            this.time_stamp = time_stamp;
        }
        return Bullet;
    }());
    exports["default"] = Bullet;
});
