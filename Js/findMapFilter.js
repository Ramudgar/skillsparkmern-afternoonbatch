const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers = arr.find((num) => num > 5);
console.log(numbers); // Output: 6

const fillterNumbers = arr.filter((num) => num > 5);
console.log(fillterNumbers);
// Output: [6, 7, 8, 9, 10]

const result=arr.map((item)=>item*2);
[2,4,6,8,10,12,14,16,18,20]