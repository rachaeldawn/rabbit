/*
 * @property id: The id of a specific calendar event
 * @property user_id: References a specific user. This is null if it is a global event for employees.
 * @property title: The title of the event, max 80 characters.
 * @property message: Optional message of the event, minimum 5 characters, maximum 1200 characters.
 * @property occurs_on: The date the event occurs on
 * @property start_time: Optional Start time of the event. 
 * @property end_time: Optional End time of the event. If null, and start time does exist, it means it starts at start_time and ends at 23:59 of occurs_on.
 */
const tablename = 'calendar_event'
class CalendarEvent {
	constructor(id, user_id, title, message, occurs_on, start_time, end_time){
		this.id = id
		this.user_id = user_id
		this.title = title
		this.message = message
		this.occurs_on = occurs_on
		this.start_time = start_time
		this.end_time = end_time
	}
}
CalendarEvent.prototype.tablename = tablename
module.exports = CalendarEvent
module.exports.tablename = tablename
