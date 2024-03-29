/*
 * @property id: The identifier of the tag 
 * @property name: A string, max length 140 characters, of a tag. Required.
 * @property red: An integer between 0 and 255 symbolizing the red in RGBA
 * @property blue: An integer between 0 and 255 symbolizing the blue in RGBA
 * @property green: An integer between 0 and 255 symbolizing the green in RGBA
 * @property opacity: An integer between 0 and 255 symbolizing the opacity in RGBA
 */
export default class Tag {
	constructor(id, name, red, blue, green, opacity){
	this.tablename = 'tag'
		this.id = id
		this.name = name
		this.red = red
		this.blue = blue
		this.green = green
		this.opacity = opacity
	}
}

Tag.prototype.tablename = 'tag'
