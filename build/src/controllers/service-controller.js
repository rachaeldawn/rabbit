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
    function CreateService(nameOrService, description, price, default_quantity, user) {
        throw 'Not implemented';
    }
    exports.CreateService = CreateService;
    function GetService(svc, user) {
        throw 'Not implemented';
    }
    exports.GetService = GetService;
    function ListServices(amt, user) {
        throw 'Not implemented';
    }
    exports.ListServices = ListServices;
    function PageServices(amt, page, user) {
        throw 'Not implemented';
    }
    exports.PageServices = PageServices;
    function UpdateService(service, obj, user) {
        throw 'Not implemented';
    }
    exports.UpdateService = UpdateService;
});
