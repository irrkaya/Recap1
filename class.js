class Employee {

    constructor(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    add() {
        console.log(`Employee added : ${this.firstName} ${this.lastName}`)
    }
}

const employee = new Employee("Irene","Soyaker")

employee.add()
employee.firstName="Mila"
console.log(employee.firstName)