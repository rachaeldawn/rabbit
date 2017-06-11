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
    exports.tablename = 'workorder_contact';
    var WorkorderContact = (function () {
        function WorkorderContact(id, workorder_id, contact_id) {
            this.id = id;
            this.workorder_id = workorder_id;
            this.contact_id = contact_id;
        }
        return WorkorderContact;
    }());
    exports["default"] = WorkorderContact;
});
