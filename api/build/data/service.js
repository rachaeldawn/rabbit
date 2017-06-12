"use strict";
exports.__esModule = true;
exports.tablename = 'service';
var Service = (function () {
    function Service(id, name, description, price, default_quantity, is_archived) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.default_quantity = default_quantity;
        this.is_archived = is_archived;
    }
    return Service;
}());
exports["default"] = Service;
