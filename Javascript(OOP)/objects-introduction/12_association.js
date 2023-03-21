class Person{
    constructor(name, lastname){
        this.name = name,
        this.lastname = lastname
    }
}
//asociacion = Los objetos pueden estas relacionados
const john = new Person('John', 'Ray')
const maria = new Person('Maria', 'Perez')
console.log(maria)
console.log(john)
//relacion
maria.parent = john
console.log("Despues de la relacion")
console.log(maria)
console.log(john)