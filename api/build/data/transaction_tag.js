"use strict";
exports.__esModule = true;
var TransactionTag = (function () {
    function TransactionTag(id, tag_id) {
        this.tablename = 'transaction_tag';
        this.id = id;
        this.tag_id = tag_id;
    }
    return TransactionTag;
}());
exports["default"] = TransactionTag;
TransactionTag.prototype.tablename = 'transaction_tag';
