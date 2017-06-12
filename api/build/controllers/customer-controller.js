"use strict";
exports.__esModule = true;
function CreateCustomer(objOrName, phone, mailingAddress, mailingPostalCode, mailingCountry, physicalAddress, physicalPostalCode, physicalCountry, token) {
    throw 'Not implemented';
}
exports.CreateCustomer = CreateCustomer;
function UpdateCustomer(cust, obj, user) {
    throw 'Not implemented';
}
exports.UpdateCustomer = UpdateCustomer;
function GetCustomer(cust, user) {
    throw 'Not implemented';
}
exports.GetCustomer = GetCustomer;
function ListCustomer(amt, user, populated) {
    throw 'Not implemented';
}
exports.ListCustomer = ListCustomer;
function PageCustomer(amt, page, user, populated) {
    throw 'Not implemented';
}
exports.PageCustomer = PageCustomer;
function CreateContact(customer, firstName, lastName, phone, ext, about, user) {
    if (ext === void 0) { ext = -1; }
    throw 'Not implemented';
}
exports.CreateContact = CreateContact;
function GetContact(contact, user) {
    throw 'Not implemented';
}
exports.GetContact = GetContact;
function ListContacts(amt, user, customer) {
    if (customer === void 0) { customer = -1; }
    throw 'Not implemented';
}
exports.ListContacts = ListContacts;
function PageContacts(amt, page, user, customer) {
    if (customer === void 0) { customer = -1; }
    throw 'Not implemented';
}
exports.PageContacts = PageContacts;
function UpdateContact(contact, obj, user) {
    throw 'Not implemented';
}
exports.UpdateContact = UpdateContact;
function DeleteContact(contact, user) {
    throw 'Not implemented';
}
exports.DeleteContact = DeleteContact;
