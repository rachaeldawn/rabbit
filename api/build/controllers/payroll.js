"use strict";
exports.__esModule = true;
function CreatePeriod(start_date, end_date, payday, user) {
    throw 'Not implemented';
}
exports.CreatePeriod = CreatePeriod;
function CreatePayroll(empl, period) {
    var items = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        items[_i - 2] = arguments[_i];
    }
    throw 'Not implemented';
}
exports.CreatePayroll = CreatePayroll;
function AddPayrollItem(payroll, name, amt, quan, user) {
    if (user === void 0) { user = -1; }
    throw 'Not implemented';
}
exports.AddPayrollItem = AddPayrollItem;
function RemovePayrollItem(item, user) {
    if (user === void 0) { user = -1; }
    throw 'Not implemented';
}
exports.RemovePayrollItem = RemovePayrollItem;
function UpdatePayrollItem(item, obj, user) {
    throw 'Not implemented';
}
exports.UpdatePayrollItem = UpdatePayrollItem;
function UpdatePayPeriod(period, obj, user) {
    throw 'Not implemented';
}
exports.UpdatePayPeriod = UpdatePayPeriod;
function GetPayPeriod(period, user, populated) {
    throw 'Not implemented';
}
exports.GetPayPeriod = GetPayPeriod;
function GetPayroll(payroll, user, populated) {
    throw 'Not implemented';
}
exports.GetPayroll = GetPayroll;
function ListPayPeriod(amt, user, populated) {
    throw 'Not implemented';
}
exports.ListPayPeriod = ListPayPeriod;
function ListPayroll(amt, user, populated) {
    throw 'Not implemented';
}
exports.ListPayroll = ListPayroll;
function PagePayPeriod(amt, page, user, populated) {
    throw 'Not implemented';
}
exports.PagePayPeriod = PagePayPeriod;
function PagePayroll(amt, page, user, populated) {
    throw 'Not implemented';
}
exports.PagePayroll = PagePayroll;
function LockPayroll(payroll, user) {
    throw 'Not implemented';
}
exports.LockPayroll = LockPayroll;
function ReleasePayroll(payroll, user) {
    throw 'Not implemented';
}
exports.ReleasePayroll = ReleasePayroll;
