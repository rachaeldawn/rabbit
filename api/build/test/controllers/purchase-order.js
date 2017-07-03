var PurchaseOrderController = require("../../controllers/purchase-order");
describe('#PurchaseOrderController', function () {
    describe("CreatePurchaseOrder", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user is not an employee');
        it('Refuses if the user does not have read permissions on purchase orders');
        it('Refuses if the user does not have write permissions on purchase orders');
        it('Creates tags if the tags exist');
        it('Creates purchase order');
        it('Returns created purchase order object');
    });
    describe("AddItem", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have write permissions on purchase orders');
        it('Refuses if the user does not have read permissions on purchase orders');
        it('Refuses if the user is not an employee');
        it('Refuses if there are missing fields');
        it('Refuses if there is no lock');
        it('Refuses if lock is not owned by user');
        it('Undefined if the PO does not exist');
        it('Creates new item');
        it('Adds item to the PO');
    });
    describe("RemoveItem", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have write permissions on purchase order');
        it('Refuses if the user does not have read permissions on purchase order');
        it('Refuses if the user is not an employee');
        it('Refuses if there is no lock');
        it('Refuses if lock is not owned by user');
        it('Removes item from invoice');
    });
    describe("GetPurchaseOrder", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have read permissions on the purchase order');
        it('Undefined if the PO does not exist');
        it('Returns a populated PO');
    });
    describe("UpdateItem", function () {
        it('Undefined if user does not exist');
        it('Undefined if the item does not exist');
        it('Refuses bad form update object (no valid fields)');
        it('Refuses if user does not have read permissions on PO');
        it('Refuses if user does not have write permissions on PO');
        it('Refuses if there is no lock');
        it('Refuses if lock is not owned by user');
        it('Updates po item');
    });
    describe("UpdateMemo", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have read permissions on purchase orders');
        it('Refuses if the user does not have write permissions on purchase orders');
        it('Undefined if the purchase order does not exist');
        it('Refuses if memo is longer than 400 characters');
        it('Refuses if there is no lock');
        it('Refuses if lock is not owned by user');
        it('Updates memo on a purchase order');
    });
    describe("ListPurchaseOrders", function () {
        it('Returns a list of Purchase Orders');
        it('Undefined if user does not exist');
        it('Refuses if user does not have read permissions on purchase orders');
    });
    describe("LockPurchaseOrder", function () {
        it('Refuses if there is already a lock on the object');
        it('Refuses if user does not have write permission on purchase orders');
        it('Ignores if user does not exist');
        it('Returns true if locked');
    });
    describe("ReleaseLock", function () {
        it('Undefined if user does not exist');
        it('Undefined if po does not exist');
        it('Refuses if user is not the owner of the lock, and does not have force unlock');
        it('Unlocks purchase order');
    });
    describe("PagePurchaseOrders", function () {
        it('Undefined if user does not exist');
        it('Refuses if the user does not have read permissions on purchase orders');
        it('Refuses negative page');
        it('Returns a page of Purchase Orders');
    });
    describe("DeletePurchaseOrder", function () {
        it('Refuses if user does not have write permissions on purchase orders');
        it('Refuses if user does not have read permissions on purchase orders');
        it('Undefined if user does not exist');
        it('Undefined if purchase order does not exist');
        it('Refuses if items exist in PO and force is false');
        it('Refuses if there are payments on the PO');
        it('Refuses if the PO has existed for more than 10 minutes');
        it('Refuses if there is no lock');
        it('Refuses if lock is not owned by user');
        it('Deletes purchase order');
        it('Deletes attached items when force is true');
    });
});
