/*
 * @property id: The Id of the transaction (1-1 relation). No support for multiple tags on a transaction.
 * @property tag_id: The bound tag Id
 */
class TransactionTag {
	constructor(id, tag_id){
		this.id = id
		this.tag_id = tag_id
	}
}
module.exports = TransactionTag
module.exports.tableName = 'transaction_tag'
