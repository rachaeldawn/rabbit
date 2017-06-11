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
    exports.tablename = 'calendar_event';
    var CalendarEvent = (function () {
        function CalendarEvent(id, user_id, title, message, occurs_on, start_time, end_time) {
            this.id = id;
            this.user_id = user_id;
            this.title = title;
            this.message = message;
            this.occurs_on = occurs_on;
            this.start_time = start_time;
            this.end_time = end_time;
        }
        return CalendarEvent;
    }());
    exports["default"] = CalendarEvent;
});
