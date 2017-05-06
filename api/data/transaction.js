/*
 * @property id: The Id of the single transaction
 * @property amount: The amount of the transaction (positive or negative).
 * @property method: One of the enum values of transaction_method are stored in here. Describes what method of payment was used to process the transaction.
 * @property paid_on: The timestamp of when the transaction was made
 */
class Transaction {
	constructor(id, amount, method, paid_on){
		this.id = id
		this.amount = amount
		this.method = method
		this.paid_on = paid_on
		this.tablename = 'transaction'
	}
}
module.exports = Transaction
