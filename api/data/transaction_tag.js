/*
 * @property id: The Id of the transaction (1-1 relation). No support for multiple tags on a transaction.
 * @property tag_id: The bound tag Id
 */
const tablename = 'transaction_tag'
class TransactionTag {
	constructor(id, tag_id){
		this.id = id
		this.tag_id = tag_id
	}
}
TransactionTag.prototype.tablename = tablename
module.exports = TransactionTag
module.exports.tablename = tablename
