
function Person(name,lastname){
    this.name = name,
    this.lastname = lastname,
    this.displayName = function(){
        return this.name +" "+ this.lastname
    }
}

const john = new Person("John", "Mcmillan")
const mario = new Person("Mario", "Rossi")
const maria = new Person("Maria", "Perez")
const jose = new Person("Jose", "Perez")

Person.prototype.greet = function(){
    return "Hello I'm "+this.name
}
console.log(john)
console.log(mario)
console.log(maria)
console.log(jose)


console.log(john.greet())
console.log(mario.greet())
console.log(maria.greet())
console.log(jose.greet())

Person.prototype.age = 100

console.log(john.age)
console.log(mario.age)
console.log(maria.age)
console.log(jose.age)

/* Prototype permite incluir propiedades y metodo al constructor en 
no agrega a los nuevos objetos creado por esa razon si llamamos a los
objetos nuevos no se mostraran las propiedades y metodos agregados 
por el uso de prototype.
Esto es usado para modificar los objetos que son creados por 
javascript */
console.log(john)
console.log(mario)
console.log(maria)
console.log(jose)

const s = new String("Hello world")

console.log(s)
String.prototype.concatTest = function(){
    return this + " Test"
}
console.log(s.concatTest())

console.log("My name is Mauricio".concatTest())
