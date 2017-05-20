(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Data = require("../data");
    /*
     * @property id: Id of the service entry
     * @property name: A max 64 character long code for the service. (SKU)
     * @property description: A max 360 character long description of what the service is.
     * @property price: The default price to be used in the price * quantity equation.
     * @property default_quantity: The default quantity of the service to be used in the price * quantity equation.
     */
    exports.tablename = 'service';
    var Service = (function () {
        function Service(id, name, description, price, default_quantity) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.price = price;
            this.default_quantity = default_quantity;
            this.Update = Data.Update.bind(this.Update, this);
            this.Sync = Data.Sync.bind(this.Sync, this);
            this.Save = Data.Save.bind(this.Save, this);
            this.Delete = Data.Delete.bind(this.Delete, this);
        }
        return Service;
    }());
    exports["default"] = Service;
    Service.Delete = Data.Delete.bind(Service.Delete);
    Service.prototype.tablename = exports.tablename;
    Service.Page = Data.Page.bind(Service.Page);
    Service.List = Data.List.bind(Service.List);
    Service.Save = Data.Save.bind(Service.Save);
    Service.Sync = Data.Sync.bind(Service.Sync);
    Service.Search = Data.Search.bind(Service.Search);
    Service.Update = Data.Update.bind(Service.Update);
});
