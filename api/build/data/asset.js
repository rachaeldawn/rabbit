"use strict";
exports.__esModule = true;
var Asset = (function () {
    function Asset(id, name, description, purchase_value, serial_key, is_archived) {
        this.tablename = 'asset';
        this.id = id;
        this.name = name;
        this.description = description;
        this.purchase_value = purchase_value;
        this.serial_key = serial_key;
        this.is_archived = is_archived;
    }
    return Asset;
}());
exports["default"] = Asset;
Asset.prototype.tablename = 'asset';
