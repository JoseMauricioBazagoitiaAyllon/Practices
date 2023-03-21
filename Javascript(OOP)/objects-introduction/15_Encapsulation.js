//Concentrate data and functions hiding internal details
//Simplify the use
//Simplify change manager
/* const company={
    name: "fazt tech",
    employees:[],
    sortEmployees: function(){

    }
}*/
//Usando Funcion como controlador
/**function Company(name){
    let employees = []
    this.name = name


    this.getEmployees = function(){
        return employees
    }

    this.addEmployee = function(employee){
        employees.push(employee)
    }
} */
class Company{
    
    constructor(name){
        this.employees = []
        this.name = name
    }


    getEmployees(){
        return this.employees
    }

    addEmployee(employee){
        this.employees.push(employee)
    }
}

const company = new Company("Coca Cola")
const company2 = new Company("Pepsi")


console.log(company)
console.log(company)

company.addEmployee({name: 'Ryan'})
company2.addEmployee({name: 'Joe'})


console.log(company.getEmployees())
console.log(company2.getEmployees())
