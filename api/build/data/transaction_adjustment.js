var Data = require("../data");
/*
 * @property id: References the new transaction
 * @property original_transaction_id: References the origin transaction
 * @property memo: A required reason why the transaction was made. Max 400 characters
 */
var tablename = 'transaction_adjustment';
var TransactionAdjustment = (function () {
    function TransactionAdjustment(id, original_transaction_id, memo) {
        this.id = id;
        this.original_transaction_id = original_transaction_id;
        this.memo = memo;
        this.Update = Data.Update.bind(this.Update, this);
        this.Sync = Data.Sync.bind(this.Sync, this);
        this.Save = Data.Save.bind(this.Save, this);
        this.Delete = Data.Delete.bind(this.Delete, this);
    }
    return TransactionAdjustment;
}());
TransactionAdjustment.prototype.tablename = tablename;
TransactionAdjustment.Delete = Data.Delete.bind(TransactionAdjustment.Delete);
TransactionAdjustment.Page = Data.Page.bind(TransactionAdjustment.Page);
TransactionAdjustment.List = Data.List.bind(TransactionAdjustment.List);
TransactionAdjustment.Save = Data.Save.bind(TransactionAdjustment.Save);
TransactionAdjustment.Sync = Data.Sync.bind(TransactionAdjustment.Sync);
TransactionAdjustment.Search = Data.Search.bind(TransactionAdjustment.Search);
TransactionAdjustment.Update = Data.Update.bind(TransactionAdjustment.Update);
module.exports = TransactionAdjustment;
module.exports.tablename = tablename;
//# sourceMappingURL=transaction_adjustment.js.map