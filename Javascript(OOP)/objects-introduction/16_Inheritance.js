/**Create a specialized object starting from a general one */
/** Usando funciones
 * function Person(){
    this.name = ''
    this.lastname = ''
}
function Programmer(){
    this.language = ''
}
Programmer.prototype = new Person()


console.log(Person)
console.log(Programmer)
const person = new Person()
person.name = 'Ryan'
person.lastname = 'Ray'
console.log(person)

const programmer = new Programmer()
programmer.name = 'Jose'
programmer.lastname = 'Ayllon'
programmer.language = 'javascript'

console.log(programmer)

*/
//usando class
class Person{
    constructor(name, lastname,age){
        this.name = name
        this.lastname = lastname
        this.age = age
    }
}
class Programmer extends Person{
    constructor(name,lastname,age,language){
        super(name,lastname,age);
        this.language = language
    }
}
const person = new Person('Ryan','Ray',25)

console.log(person)

const programmer = new Programmer('Mauricio','Bazagoitia', 23, 'Javascript')

console.log(programmer)


