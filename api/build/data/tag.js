/*
 * @property id: The identifier of the tag
 * @property name: A string, max length 140 characters, of a tag. Required.
 * @property red: An integer between 0 and 255 symbolizing the red in RGBA
 * @property blue: An integer between 0 and 255 symbolizing the blue in RGBA
 * @property green: An integer between 0 and 255 symbolizing the green in RGBA
 * @property opacity: An integer between 0 and 255 symbolizing the opacity in RGBA
 */
var tablename = 'tag';
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
Tag.prototype.tablename = tablename;
module.exports = Tag;
module.exports.tablename = tablename;
//# sourceMappingURL=tag.js.map