class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  greet() {
    console.log(`Hi ${this.name}`);
  }
}

let person1 = new Person("John", 25);
let person2 = new Person("Jane", 22);
let prasan= new Person("Prasan", 25);

console.log(person1.name);
console.log(person1.age);
person1.eat();
person1.greet();

console.log(person2.name);
console.log(person2.age);


