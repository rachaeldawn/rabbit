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
    var Data = require("../data");
    /*
     * @property id: The id of the specfic sticky note
     * @property user_id: The id of the user that made the sticky note
     * @property message: A max 1200 character message for the bulletin board. Minimum 5 characters
     * @property time_stamp: A timestamp of when the sticky note was created
     */
    exports.tablename = 'bullet';
    var Bullet = (function () {
        function Bullet(id, user_id, message, time_stamp) {
            this.id = id;
            this.user_id = user_id;
            this.message = message;
            this.time_stamp = time_stamp;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Bullet;
    }());
    exports["default"] = Bullet;
    Bullet.Delete = Data.Delete.bind(Bullet.Delete);
    Bullet.prototype.tablename = exports.tablename;
    Bullet.Page = Data.Page.bind(Bullet.Page);
    Bullet.List = Data.List.bind(Bullet.List);
    Bullet.Save = Data.Save.bind(Bullet.Save);
    Bullet.Sync = Data.Sync.bind(Bullet.Sync);
    Bullet.Search = Data.Search.bind(Bullet.Search);
    Bullet.Update = Data.Update.bind(Bullet.Update);
});
