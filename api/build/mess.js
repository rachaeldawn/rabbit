var Customer = (function () {
    function Customer(name, age) {
        this.name = name;
        this.age = age;
    }
    return Customer;
}());
var custy = {
    name: "jonathan",
    george: 33
};
function DoThing(obj) {
    console.log(obj);
}
