// no es un tipo de datos solo es una forma mas bonita de escribir las funciones
/*function Person(name,lastname){
    this.name = name,
    this.lastname = lastname
}
Person.prototype.greet = function(){
    return 'Hello I am '+ " " + this.name +" "+ this.lastname
}
*/
class Person{
    constructor(name,lastname){
        this.name = name,
        this.lastname = lastname
    }
    greet(){
        return 'Hello I am '+ " " + this.name +" "+ this.lastname
    }
}
const user1 = new Person('Joe','ray')
const user2 = new Person('Ryan','Ray')
console.log(user1)
console.log(user2)
console.log(user1.name)
console.log(user2.name)
console.log(user1.lastname)
console.log(user2.lastname)
console.log(user1.greet())
console.log(user2.greet())
