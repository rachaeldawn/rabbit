/*
 * @property id: The identifier of the tag 
 * @property name: A string, max length 140 characters, of a tag. Required.
 * @property color: Optional hex code of a tag color. #FFFFFF is an example.
 * @property opacity: A decimal between 0 and 1 indicating the A in RGBA.
 */
class Tag {
	constructor(id, name, color, opacity){
		this.id = id
		this.name = name
		this.color = color
		this.opacity = opacity
	}
}
module.exports = Tag
module.exports.tableName = 'tag'
