class Customer {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

var custy = {
    name: "jonathan", 
    george: 33
}

function DoThing(obj: Customer) {
    console.log(obj)
}
