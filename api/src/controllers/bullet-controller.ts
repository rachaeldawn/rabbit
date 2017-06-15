import Bullet from "../data/bullet"
import BulletComment from "../data/bullet_comment"
import {default as User} from "../data/user_account"
import * as Data from "../data"


/*
 * Exported Functions: 
 * 	NewBullet: Creates a new global bullet
 * 	UpdateBullet: Updates a bullet object
 * 	GetBullet: Gets a single bullet object
 * 	ListBullets: Gets a list of bullets. Alias for PageBullets(page=1)
 * 	PageBullets: Gets a page of bullets
 * 	DeleteBullet: Deletes a bullet
 * 	NewComment: Creates a new comment on a bullet
 * 	UpdateComment: Updates a single comment message
 * 	ListComments: Gets a list of comments
 * 	PageComments: Gets a page of contents, optionally on a bullet
 * 	ListCommentsByUser: Gets comments posted by a user. Alias for PageCommentsByUser(page = 1)
 * 	PageCommentsByUser: Gets a page of comments posted by a user
 * 	ListBulletsByUser: Gets a list of bullets that a user posted. Alias for PageBulletsByUser(page = 1)
 * 	PageBulletsByUser: Gets a page of bullets from a user
 * Private Functions: 
 */
/*
 * Purpose: Creates a new global bullet
 * @param msg: The message to be posted to the global space (default: undefined)
 * @param user: The id or User object attempting to post a new global message (default: undefined)
 */
export function NewBullet(msg: string , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a bullet object
 * @param bullet: The id or Bullet object to update (default: undefined)
 * @param obj: The update object. Supports field message/msg (default: undefined)
 * @param user: The id or User object attempting to update the bullet (default: undefined)
 */
export function UpdateBullet(bullet: number|Bullet , obj: Object , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a single bullet object
 * @param bullet: The id or Bullet object to retrieve (default: undefined)
 * @param user: The id or User object requesting the bullet (default: undefined)
 * @param populated: Whether or not the bullet object should have the comments attached to it as well. (default: false)
 */
export function GetBullet(bullet: number|Bullet , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of bullets. Alias for PageBullets(page=1)
 * @param amt: The amount of bullets to get. Max 100 (default: undefined)
 * @param user: The id or User object requesting the listing (default: undefined)
 * @param populated: Whether or not the listing should also have comments populated in each object. (default: false)
 */
export function ListBullets(amt: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of bullets
 * @param amt: The amount of bullets to get (max 100) (default: undefined)
 * @param page: The page to get (starting point 1) (default: undefined)
 * @param user: The id or User object requesting the page (default: undefined)
 * @param populated: Whether or not the bullets should come with comments filled in the object (default: false)
 */
export function PageBullets(amt: number , page: number , user: number|User , populated: boolean ) {
	throw 'Not implemented'
}
/*
 * Purpose: Deletes a bullet
 * @param bullet: The id or Bullet object being deleted (default: undefined)
 * @param user: The id or User object deleting the bullet (default: undefined)
 */
export function DeleteBullet(bullet: number|Bullet , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Creates a new comment on a bullet
 * @param message: The message to be posted (default: undefined)
 * @param bullet: The id or Bullet being commented on (default: undefined)
 * @param user: The id or User object posting the comment (default: undefined)
 */
export function NewComment(message: string , bullet: number|Bullet , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Updates a single comment message
 * @param msg: The new message contents (default: undefined)
 * @param comment: The id or comment being updated (default: undefined)
 * @param user: The id or User object updating the comment (default: undefined)
 */
export function UpdateComment(msg: string , comment: number|BulletComment , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of comments
 * @param amt: The quantity of comments to retrieve (default: undefined)
 * @param user: The id or User object requesting the comments (default: undefined)
 * @param bullet: The optional bullet to get the comments on (default: -1)
 */
export function ListComments(amt: number , user: number|User , bullet: number|Bullet  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of contents, optionally on a bullet
 * @param amt: The quantity of comments in a page to retrieve (default: undefined)
 * @param page: The page number to get (starting point 1) (default: undefined)
 * @param user: The id or User object requesting the comments (default: undefined)
 * @param bullet: The optional bullet to get the comments on (default: -1)
 */
export function PageComments(amt: number , page: number , user: number|User , bullet: number|Bullet  = -1) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets comments posted by a user. Alias for PageCommentsByUser(page = 1)
 * @param amt: The amount of comments to get (default: undefined)
 * @param target: The user to get the posts of (default: undefined)
 * @param user: The user requesting the listk (default: undefined)
 */
export function ListCommentsByUser(amt: number , target: number|User , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of comments posted by a user
 * @param amt: The amount of comments in a page to get (default: undefined)
 * @param page: The page number to get (starting point 1) (default: undefined)
 * @param target: The id or User object to get the comments of (default: undefined)
 * @param user: The id or User requesting the listing (default: undefined)
 */
export function PageCommentsByUser(amt: number , page: number , target: number|User , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a list of bullets that a user posted. Alias for PageBulletsByUser(page = 1)
 * @param amt: The amount of bullets to retrieve (default: undefined)
 * @param target: The target id or user object to get the bullets of (default: undefined)
 * @param user: The id or User object requesting the bullets (default: undefined)
 */
export function ListBulletsByUser(amt: number , target: number|User , user: number|User ) {
	throw 'Not implemented'
}
/*
 * Purpose: Gets a page of bullets from a user
 * @param amt: The amount of bullets in a page to retrieve (default: undefined)
 * @param page: The page of bullets to get. Starting point 1 (default: undefined)
 * @param target: The id or User object to get the bullets of (default: undefined)
 * @param user: The id or User object requesting the page (default: undefined)
 */
export function PageBulletsByUser(amt: number , page: number , target: number|User , user: number|User ) {
	throw 'Not implemented'
}


