// let num = [1, 2, 3, 4];
// let name = ["Ram", "sita", "Hari", "Gita"];
// // index:- [0,1,2,3]

// // console.log(num.length)
// // console.log(name.length)

// console.log(num[3]);
// console.log(name[0]);

// // for (i in num){
// //     console.log(num[i])
// // }

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

//  Create a function that calculates the average of an array of numbers.

let num1 = [10, 30, 1, 3, 2];
function avgNum(num) {
  let mul = 1; //46
  for (let i = 1; i < num.length; i++) {
    mul *= num[i];
  }
  return mul / 2;
}

let avgResult = avgNum(num1);
console.log(avgResult);
