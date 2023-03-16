 //this es como decir quiero el objeto en el que estoy
const user = {
    name:"Jose",
    lastname:"Ayllon",
    age: 30,
    showFullName(){
        return this.name + " " + this.lastname
    }
}
console.log(user.showFullName())
const account={
    number: "400123456789010",
    amount:100,
    deposite(quantity){
        this.amount = this.amount + quantity
    },
    withdraw(quantity){
        this.amount = this.amount + quantity
    }
}
console.log(account)
account.deposite(100)
console.log(account)
account.deposite(50)
console.log(account)
account.deposite(100)
console.log(account)
account.deposite(30)
console.log(account)
account.withdraw(100)
console.log(account)
account.withdraw(30)
console.log(account)
account.withdraw(80)
console.log(account)
