class Person {
  constructor(name, phone) {
    (this.name = name), (this.phone = phone);
  }
  getPersonalDetails() {
    console.log("Person Name : ", this.name, "\n :", this.phone);
  }
}

class Employee extends Person {
  constructor(name, phone, email, salary) {
    super(name, phone);
    (this.email = email), (this.salary = salary);
  }

  getOfficedetails() {
    console.log("salary : ", this.salary, "\n email :", this.email);
  }
}

let p1 = new Person("Prakash", 8500957777);
console.log(p1);
console.log(p1.getPersonalDetails);

let e1 = new Employee("Satya", 9177770707, "p@gmail.com", 45000);
console.log(e1);

console.log(e1.getOfficedetails());
console.log(e1.getPersonalDetails());
