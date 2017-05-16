var Data = require("../data");
/*
 * @property id: Id of the service entry
 * @property name: A max 64 character long code for the service. (SKU)
 * @property description: A max 360 character long description of what the service is.
 * @property price: The default price to be used in the price * quantity equation.
 * @property default_quantity: The default quantity of the service to be used in the price * quantity equation.
 */
var tablename = 'service';
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
Service.prototype.tablename = tablename;
Service.Delete = Data.Delete.bind(Service.Delete);
Service.Page = Data.Page.bind(Service.Page);
Service.List = Data.List.bind(Service.List);
Service.Save = Data.Save.bind(Service.Save);
Service.Sync = Data.Sync.bind(Service.Sync);
Service.Search = Data.Search.bind(Service.Search);
Service.Update = Data.Update.bind(Service.Update);
module.exports = Service;
module.exports.tablename = tablename;
//# sourceMappingURL=service.js.map