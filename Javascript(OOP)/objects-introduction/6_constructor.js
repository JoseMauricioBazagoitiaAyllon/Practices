//Un constructor es un generador de objetos el constructor es una funcion Se usa mayuscula en la primera letra
const user1 ={
    name:"Ryan",
    lastname: "Ray",
    age: 30,
    showFullName(){
        return `${this.name} ${this.lastname}`
    }
}
console.log(user1.showFullName())
function Person(){
    this.name = ""
    this.lastname = ""
    this.age = 0
    this.showFullName = function(){
        return this.name + " " + this.lastname
    }
}
const user2 = new Person()
user2.name = "Joe"
user2.lastname = "McMilan"
user2.age = 30
console.log(user2.showFullName())
const user3 = new Person()
user3.name = "Cameron"
user3.lastname = "howe"
user3.age = 29
console.log(user2.showFullName())
const user4 = new Person()
const user5 = new Person()
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)

