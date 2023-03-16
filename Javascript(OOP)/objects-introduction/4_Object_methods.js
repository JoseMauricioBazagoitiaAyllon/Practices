//en el paradigma OOP lo0s metodos son acciones Son acciones en codigo son funciones
// Una propiedad da nombre a algo consta de una key and value que puede ser string number incluso otro objeto pero si el value contiene 
// una funcion pasa a ser un metodos y ya no una propiedad

function showFullName(){
    return "Ryan Ray"
}
function startCar(){
    console.log("Car on")
}
function turnOffCar(){
    console.log("Car off")
}
function withDraw(monto){
    debitCard.amount = debitCard.amount - monto
}
function deposit(monto){
    debitCard.amount = debitCard.amount + monto
}
const car ={
    model:"Shellby cobra ",//Proprties
    start: startCar,//Method
    turnOff: turnOffCar//Method too
}
console.log(car)
car.start()
console.log( "-------------------------------------" )
car.turnOff()
const debitCard={
    number:"4000123456789010",
    withdraw:withDraw,
    deposit: deposit,
    amount:200
}
console.log(debitCard)
debitCard.withdraw(20)
console.log(debitCard)
console.log( "-------------------------------------" )
debitCard.deposit(100)
console.log(debitCard)
const user = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName: showFullName
}
console.log(user.showFullName())
// Use the method without daclarate the function before
const userSeconVersion = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName: function(){
        return "Ryan Ray"
    }
}
console.log(userSeconVersion.showFullName())
// other option
const userThirdVersion = {
    name: "Ryan",
    lastname: "Ray",
    age: 30,
    showFullName(){
        return "Ryan Ray"
    }
}
console.log(userThirdVersion.showFullName())
