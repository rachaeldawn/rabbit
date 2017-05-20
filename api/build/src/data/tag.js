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
     * @property id: The identifier of the tag
     * @property name: A string, max length 140 characters, of a tag. Required.
     * @property red: An integer between 0 and 255 symbolizing the red in RGBA
     * @property blue: An integer between 0 and 255 symbolizing the blue in RGBA
     * @property green: An integer between 0 and 255 symbolizing the green in RGBA
     * @property opacity: An integer between 0 and 255 symbolizing the opacity in RGBA
     */
    exports.tablename = 'tag';
    var Tag = (function () {
        function Tag(id, name, red, blue, green, opacity) {
            this.id = id;
            this.name = name;
            this.red = red;
            this.blue = blue;
            this.green = green;
            this.opacity = opacity;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Tag;
    }());
    exports["default"] = Tag;
    Tag.Delete = Data.Delete.bind(Tag.Delete);
    Tag.prototype.tablename = exports.tablename;
    Tag.Page = Data.Page.bind(Tag.Page);
    Tag.List = Data.List.bind(Tag.List);
    Tag.Save = Data.Save.bind(Tag.Save);
    Tag.Sync = Data.Sync.bind(Tag.Sync);
    Tag.Search = Data.Search.bind(Tag.Search);
    Tag.Update = Data.Update.bind(Tag.Update);
});
