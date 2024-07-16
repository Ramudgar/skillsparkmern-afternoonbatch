// constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// create object
let person1 = new Person("John", 25);

// access properties
// console.log(person1.name); // John

// callback function

function greet(name, callback) {
  console.log(`hi ${name}`);
  callback();
}

function callme() {
  console.log("How are you?");
}

greet("Shyam", callme);

//


function add(a, b) {
  console.log(a + b);
}

function sub(a, b) {
  console.log(a - b);
}

function mul(a, b) {
  console.log(a * b);
}

function operation(a, b, add, sub, mul) {
  mul(a, b);
  add(a, b);
  sub(a, b);
}


operation(10, 5, add, sub, mul);


