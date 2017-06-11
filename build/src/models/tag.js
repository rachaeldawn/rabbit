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
    exports.tablename = 'tag';
    var Tag = (function () {
        function Tag(id, name, red, blue, green, opacity) {
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
});
