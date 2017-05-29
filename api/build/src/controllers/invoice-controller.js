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
    /*
     * Exported Functions:
     * 	CreateWorkorder: Creates an invoice for use
     * 	RequestWorkorderLock: Requests a lock for read/write on a workorder. The workorder id is the dictionary key
     * 	IsWorkorderLocked: Checks whether or not the workorder is locked
     * 	ReleaseWorkorderLock: Release the lock on a workorder object
     * 	AddToWorkorder: Adds an item to the workorder
     * 	RemoveFromWorkorder: Removes a service from a workorder
     * 	CloseWorkorder: Closes a workorder that is currently open.
     * 	AddWorkorderContact: Adds a contact to a workorder
     * 	RemoveWorkorderContact: Removes a contact from a workorder
     * 	AddTransaction: Adds a transaction to a workorder
     * 	ConvertEstimateToWorkorder: Converts an estimate into a workorder
     * Private Functions:
     */
    /*
     * Purpose: Creates an invoice for use
     * @param customer: The id or customer object for the invoice (default: undefined)
     * @param employee: The id or the user object to look up the employee for (default: undefined)
     */
    function CreateWorkorder(customer, employee) {
        throw 'Not implemented';
    }
    exports.CreateWorkorder = CreateWorkorder;
    /*
     * Purpose: Requests a lock for read/write on a workorder. The workorder id is the dictionary key
     * @param workorder: The id or workorder object to request the lock for (default: undefined)
     * @param user: The id or user object requesting the lock (default: undefined)
     */
    function RequestWorkorderLock(workorder, user) {
        throw 'Not implemented';
    }
    exports.RequestWorkorderLock = RequestWorkorderLock;
    /*
     * Purpose: Checks whether or not the workorder is locked
     * @param workorder: The workorder to check (default: undefined)
     * @param user:  (default: undefined)
     */
    function IsWorkorderLocked(workorder, user) {
        throw 'Not implemented';
    }
    exports.IsWorkorderLocked = IsWorkorderLocked;
    /*
     * Purpose: Release the lock on a workorder object
     * @param lock: The workorder id that is locked (default: undefined)
     * @param user: The user releasing the workorder lock (default: undefined)
     */
    function ReleaseWorkorderLock(lock, user) {
        throw 'Not implemented';
    }
    exports.ReleaseWorkorderLock = ReleaseWorkorderLock;
    /*
     * Purpose: Adds an item to the workorder
     * @param service: The service to add to the workorder (default: undefined)
     * @param workorder: The workorder to add the service to (default: undefined)
     * @param quantity: The amount of the service to add to the workorder (default: undefined)
     * @param user: The id or user object adding to the invoice (default: undefined)
     */
    function AddToWorkorder(service, workorder, quantity, user) {
        throw 'Not implemented';
    }
    exports.AddToWorkorder = AddToWorkorder;
    /*
     * Purpose: Removes a service from a workorder
     * @param item: The workorder item to remove from the invoice (default: undefined)
     * @param workorder: The workorder to remove the item from (default: undefined)
     * @param user: The user trying to remove the item (default: undefined)
     */
    function RemoveFromWorkorder(item, workorder, user) {
        throw 'Not implemented';
    }
    exports.RemoveFromWorkorder = RemoveFromWorkorder;
    /*
     * Purpose: Closes a workorder that is currently open.
     * @param workorder: The id or Workorder object to be closed (default: undefined)
     * @param user: The id or User object attempting to close the workorder (default: undefined)
     */
    function CloseWorkorder(workorder, user) {
        throw 'Not implemented';
    }
    exports.CloseWorkorder = CloseWorkorder;
    /*
     * Purpose: Adds a contact to a workorder
     * @param contact: The id or Contact object to be added to the workorder (default: undefined)
     * @param workorder: The workorder to add the contact to (default: undefined)
     * @param user: The id or user adding the contact (default: undefined)
     */
    function AddWorkorderContact(contact, workorder, user) {
        throw 'Not implemented';
    }
    exports.AddWorkorderContact = AddWorkorderContact;
    /*
     * Purpose: Removes a contact from a workorder
     * @param contact: The id or contact object to remove from the workorder (default: undefined)
     * @param workorder: The id or workorder object to remove the contact from (default: undefined)
     * @param user: The user removing the contact from the board (default: undefined)
     */
    function RemoveWorkorderContact(contact, workorder, user) {
        throw 'Not implemented';
    }
    exports.RemoveWorkorderContact = RemoveWorkorderContact;
    /*
     * Purpose: Adds a transaction to a workorder
     * @param transaction: The transaction object (default: undefined)
     * @param workorder: The workorder to add the transaction to (default: undefined)
     * @param contact: The contact that authorized the transaction (default: undefined)
     */
    function AddTransaction(transaction, workorder, contact) {
        throw 'Not implemented';
    }
    exports.AddTransaction = AddTransaction;
    /*
     * Purpose: Converts an estimate into a workorder
     * @param estimate: The id or Estimate object to convert (default: undefined)
     * @param user: The id or user object requesting the conversion (default: undefined)
     */
    function ConvertEstimateToWorkorder(estimate, user) {
        throw 'Not implemented';
    }
    exports.ConvertEstimateToWorkorder = ConvertEstimateToWorkorder;
});
