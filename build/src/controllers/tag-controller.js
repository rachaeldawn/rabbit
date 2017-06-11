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
    function TagObject(obj, tagOrName, color) {
        throw 'Not implemented';
    }
    exports.TagObject = TagObject;
    function UntagObject(obj, tag) {
        throw 'Not implemented';
    }
    exports.UntagObject = UntagObject;
    function GetTags(obj) {
        throw 'Not implemented';
    }
    exports.GetTags = GetTags;
    function StripTags(obj) {
        throw 'Not implemented';
    }
    exports.StripTags = StripTags;
});
