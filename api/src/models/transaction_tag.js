/*
 * @property id: The Id of the transaction (1-1 relation). No support for multiple tags on a transaction.
 * @property tag_id: The bound tag Id
 */
export const tablename = 'transaction_tag'
export default class TransactionTag {
	constructor(id, tag_id){
		this.id = id
		this.tag_id = tag_id
	}
}

