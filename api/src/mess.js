var Customer = (function () {
    function Customer(name, age) {
        this.name = name;
        this.age = age;
    }
    return Customer;
}());
var custy = {
    name: "jonathan",
    age: 23,
    george: 33
};
function DoThing(obj) {
    console.log(obj);
}
DoThing(custy);
