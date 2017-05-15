/*
 * @property id: The Id of the transaction (1-1 relation). No support for multiple tags on a transaction.
 * @property tag_id: The bound tag Id
 */
var tablename = 'transaction_tag';
var TransactionTag = (function () {
    function TransactionTag(id, tag_id) {
        this.id = id;
        this.tag_id = tag_id;
    }
    return TransactionTag;
}());
TransactionTag.prototype.tablename = tablename;
module.exports = TransactionTag;
module.exports.tablename = tablename;
//# sourceMappingURL=transaction_tag.js.map