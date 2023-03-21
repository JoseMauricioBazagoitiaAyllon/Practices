/** existen dos niveles 
 * agregate and
 * componente
 */
//agregador
const company = {
    name: "fazt tech",
    employees: []
}
// Componente
class Person{
    constructor(name,lastname){
        this.name = name,
        this.lastname = lastname
    }
}
const maria = new Person('Maria', 'Perez')
const john = new Person('John', 'Ray')

company.employees.push(john)
company.employees.push(maria)

console.log(john)
console.log(maria)

console.log(company)