import { Asset } from "./data/asset"
import { clone } from "lodash"
var ClassAsFunction = (function(id: number, name: string, thing: string) {
    this.id = id
    this.name = name
    this.thing = thing
})

class ClassAsClass {
    id: number
    name: string
    thing: string
    constructor(id: number, name: string, thing: string) {
        this.id = id
        this.name = name,
        this.thing = thing
    }
}

var q: any = ClassAsClass

var f = new q(2, 'hello', 'george')
console.log(f)

q = ClassAsFunction
f = new q(2, 'hello', 'george')

console.log(f)

q = Asset
f = new q(2, 'hello', 'george')

console.log(f)

q = clone(Asset)
f = new q(2, 'hello', 'george')


console.log(f)