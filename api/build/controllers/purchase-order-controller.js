"use strict";
exports.__esModule = true;
function CreatePurchaseOrder(user, memo) {
    var tags = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        tags[_i - 2] = arguments[_i];
    }
    throw 'Not implemented';
}
exports.CreatePurchaseOrder = CreatePurchaseOrder;
function AddItem(name, description, quantity, price, po, user) {
    throw 'Not implemented';
}
exports.AddItem = AddItem;
function RemoveItem(poItem, purchaseOrder, user) {
    throw 'Not implemented';
}
exports.RemoveItem = RemoveItem;
function GetPurchaseOrder(po, user) {
    throw 'Not implemented';
}
exports.GetPurchaseOrder = GetPurchaseOrder;
function UpdateItem(poitem, updateobj, user) {
    throw 'Not implemented';
}
exports.UpdateItem = UpdateItem;
function UpdateMemo(memo, po, user) {
    throw 'Not implemented';
}
exports.UpdateMemo = UpdateMemo;
function ListPurchaseOrders(amt, user) {
    throw 'Not implemented';
}
exports.ListPurchaseOrders = ListPurchaseOrders;
function PagePurchaseOrders(amt, page, user) {
    throw 'Not implemented';
}
exports.PagePurchaseOrders = PagePurchaseOrders;
function DeletePurchaseOrder(po, user, force) {
    throw 'Not implemented';
}
exports.DeletePurchaseOrder = DeletePurchaseOrder;
