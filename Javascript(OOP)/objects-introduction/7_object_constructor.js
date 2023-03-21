const person = new Object()
console.log(person)
const number1 = new Object(12)
console.log(number1)
const number2 = new Object(3*2)
console.log(number2)
const String1 = new Object("Hello World")
console.log(String1)
const string = new Object("Hello world")
string.name = "Special String"
string.test = function (){
    return this + "Test"
}
console.log(string.name)
console.log(string.test())
const user={
    name: "Ryan",
    lastname: "Ray",
    age : 30,
    showName(){
        return this.name
    }
}
console.log(Object.keys(user))
console.log(Object.values(user))