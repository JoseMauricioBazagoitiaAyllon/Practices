function Person(){
    "use strict"
    this.name = ""
    this.lastname = ""
}

const person = new Person()
console.log(person)
//Sin la palabra new el constructor actua como una funcion
//y las propiedades de person son asignadas a window
//"use strict" hace que this sea undefined y en caso de no poner new 
//Muestre un eroor ya que no se puede dar propiedades a undeefined

const manking ={
    Person: function(){
        "use strict"
        this.name = ""
        this.lastname = ""
    }
}


//const person2 = Person() ESTO DA UN ERROR por que no puede designar propiedades a window
const person2 = manking.Person()
console.log(person2)
console.log(manking)