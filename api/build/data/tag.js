"use strict";
exports.__esModule = true;
var Tag = (function () {
    function Tag(id, name, red, blue, green, opacity) {
        this.tablename = 'tag';
        this.id = id;
        this.name = name;
        this.red = red;
        this.blue = blue;
        this.green = green;
        this.opacity = opacity;
    }
    return Tag;
}());
exports["default"] = Tag;
Tag.prototype.tablename = 'tag';
