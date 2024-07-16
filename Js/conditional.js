//  if(condition){
//       // code to be executed
//  }
//  else{
//       // code to be executed
//  }

// let age = 14;
// if (age >= 18) {
//   console.log(" You are eligible for voting");
// } else {
//   console.log(
//     "your age is " + age + ", less than 18 You are not eligible for voting"
//   );
// }

// // multiple conditions

// let marks = -1;
// if (marks >= 80 && marks <= 100) {
//   console.log("You got A grade");
// } else if (marks >= 60) {
//   console.log("You got B grade");
// } else if (marks >= 40) {
//   console.log("You got C grade");
// } else if (marks < 40 && marks >= 0) {
//   console.log("You are fail");
// } else {
//   console.log("Invalid marks");
// }

// // mulitple conditions
// let mark = 110;
// if (mark < 40 && mark >= 0) {
//   console.log("You are fail");
// } else if (mark >= 40 && mark < 60) {
//   console.log("You got C grade");
// } else if (mark >= 60 && mark < 80) {
//   console.log("You got B grade");
// } else if (mark >= 80 && mark <= 100) {
//   console.log("You got A grade");
// } else {
//   console.log("Invalid marks");
// }

// let num = 0;
// if (num > 0) {
//   console.log("Positive number");
// } else if (num < 0) {
//   console.log("Negative number");
// } else {
//   console.log("Zero");
// }

// switch (expression) {
//   case value1:
//     // code to be executed
//     break;
//   case value2:
//     // code to be executed
//     break;
//   case value3:
//     // code to be executed
//     break;
//   default:
//   // code to be executed
// }

// let num = -6;
// if (num) {
//   console.log("Number is not zero");
// } else {
//   console.log("Number is zero");
// }

// let day = "sunday";
// switch (day ) {
//   case "monday":
//     console.log("Today is Monday");
//     break;
//   case "tuesday":
//     console.log("Today is Tuesday");
//     break;
//   case "wednesday":
//     console.log("Today is Wednesday");
//     break;
//   case "thursday":
//     console.log("Today is Thursday");
//     break;
//   case "friday":
//     console.log("Today is Friday");
//     break;
//   case "saturday":
//     console.log("Today is Saturday");
//     break;
//   case "sunday":
//     console.log("Today is Sunday");
//     break;
//   default:
//     console.log("Invalid day");
// }

let num = 4;
if (num % 2 === 0) {
  console.log("Even number");
} else if (num % 2 === 1) {
  console.log("Odd number");
} else {
  console.log("Invalid number");
}

let num1 = 5;
switch (num1 % 2) {
  case 0:
    console.log("Even number");
    break;
  case 1:
    console.log("Odd number");
    break;
  default:
    console.log("Invalid number");
}

let num3 = 5;
switch (true) {
  case num3 % 2 === 0:
    console.log("Even number");
    break;
  case num3 % 2 === 1:
    console.log("Odd number");
    break;
  default:
    console.log("Invalid number");
}



let success= true;
let boolToString=String(success);
console.log(boolToString); // "true"
console.log(typeof boolToString); // "string"


let num4= 10;
let numToBool= Boolean(num4);
console.log(numToBool); // true
console.log(typeof numToBool); // "boolean"

