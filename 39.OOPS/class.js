class mobiles {
  constructor(name, price, ram) {
    (this.name = name), (this.price = price), (this.ram = ram);
  }
  updatedRam(uram) {
    this.ram = uram;
  }
}

let m1 = new mobiles("Iphone 16", 69000, "6gb");
console.log(m1);
m1.updatedRam("8gb");
console.log(m1);

class persons {
  constructor(name, email, age) {
    (this.name = name), (this.email = email), (this.age = age);
  }
}

let p1 = new persons("Prakash", "p@gmail.com", 27);
console.log(p1);

// setter function in class Example
class employees {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }

  // setter function example in class
  set salarySet(s) {
    if (s <= 0) {
      alert("Price cannot be less than 0");
    } else {
      this.salary = s;
    }
  }

  // getter function example in class
  get getName() {
    return "Employee Name: " + this.name;
  }
}

let e1 = new employees("Satya", "s@gmail.com");
console.log(e1);

// ekkada set anedhi function andhulo method undhi kabatti aa property in direct ga mention cheesi value evvali

e1.getName;
console.log(e1);

e1.salarySet = 45000;
console.log(e1);
