/*
handle multiple data types uniformly
benefits of polimorphism
reduce coupling in our application
sometimes allow to create more compact code
Sobrecarga- overloading
Methods can take parameters with diferent data types
This is that you can use a same method but with other data type 
Other use is that your can the same method with different number of parameters 
*/
console.log("Overloading")
function countItems(x){
    return x.toString().length
}
console.log(countItems(10000))
console.log(countItems("Hola Mundo"))

function sum(x=0,y=0,z=0){
    return x+y+z
}


console.log(sum(10,20))
console.log(sum(10,20,30))

/**
 * Parametic
 * Manage generic types.not know in advance
 * method that works with parameters of any types also called generics
 */
console.log("Parametic")
function Stack(){
    this.item = []
    this.push = function(item){
        this.item.push(item)
    }
}

const stack = new Stack()
const stack2 = new Stack()


stack.push("asasddsaff")
stack.push("bvbvbvbbvbv")

stack2.push(13)
stack2.push(12)

console.log(stack)
console.log(stack2)




/**
 * Subtype Polymorphis or inclusion polymorphism
 * type can b¿e represented by a class and derived from it
 * allows objects with differrent types but with an inheritance relationship
 * You can declarate a type of object however If you pass as parameter 
 * a object different than the declared the funtion work while that will be 
 * a son  of the object declared
 */
console.log("Subtype Polymorphis")
class Person{
    constructor(name,lastname){
        this.name = name
        this.lastname = lastname
    }
}


class Programmer extends Person{
    constructor(name,lastname,language){
        super(name,lastname)
        this.language = language
    }
}

const john = new Person('John','Ray')
const mauricio = new Programmer('Mauricio', 'Bazagoitia','Javascript')

function writeFullname(o){
    console.log(o.name +" " + o.lastname)
}

writeFullname(john)
writeFullname(mauricio)