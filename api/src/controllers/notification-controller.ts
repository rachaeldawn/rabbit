import {default as User} from "../data/user_account"
import Notification from "../data/notification"


/*
 * Exported Functions: 
 * 	GetNotifications: Gets the notifications for the user
 * 	CreateNotification: Creates a notification for a user (if it can not be derived)
 * 	RemoveNotification: Removes a notification that has been viewed
 * 	CacheNotifications: Caches all notifications for performance sake by pulling all of them from the database, and finding the notifications that need to exist.
 * 	SetRead: Sets a notification (or notification set) as read
 * Private Functions: 
 */
/*
 * Purpose: Gets the notifications for the user
 * @param user: The id or user to get the notifications for (default: undefined)
 */
export function GetNotifications(user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a notification for a user (if it can not be derived)
 * @param user: The id or the user object to create the notification for (default: undefined)
 * @param origin: The origin of the notification (default: undefined)
 * @param message: The message to give to the user (default: undefined)
 */
export function CreateNotification(user: number|User , origin: string , message: string ) {
	throw 'Not implemented'
}
/*
 * Purpose: Removes a notification that has been viewed
 * @param notification: The notification to remove (default: undefined)
 * @param user: The id or user object requesting the removal (default: undefined)
 */
export function RemoveNotification(notification: number|Notification , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Caches all notifications for performance sake by pulling all of them from the database, and finding the notifications that need to exist.
 */
export function CacheNotifications() {
	throw 'Not implemented'
}
/*
 * Purpose: Sets a notification (or notification set) as read
 * @param notification:  (default: undefined)
 * @param user: The id or user object setting the notification to read (default: undefined)
 */
export function SetRead(notification: Notification|Notification[] , user: number|User ) {
	throw 'Not implemented'
}


