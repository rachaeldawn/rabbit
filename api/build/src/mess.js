(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./data/asset", "lodash"], factory);
    }
})(function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var asset_1 = require("./data/asset");
    var lodash_1 = require("lodash");
    var ClassAsFunction = (function (id, name, thing) {
        this.id = id;
        this.name = name;
        this.thing = thing;
    });
    var ClassAsClass = (function () {
        function ClassAsClass(id, name, thing) {
            this.id = id;
            this.name = name,
                this.thing = thing;
        }
        return ClassAsClass;
    }());
    var q = ClassAsClass;
    var f = new q(2, 'hello', 'george');
    console.log(f);
    q = ClassAsFunction;
    f = new q(2, 'hello', 'george');
    console.log(f);
    q = asset_1.Asset;
    f = new q(2, 'hello', 'george');
    console.log(f);
    q = lodash_1.clone(asset_1.Asset);
    f = new q(2, 'hello', 'george');
    console.log(f);
});
