// right angled triangle

// let n = 5;
// let star = '';
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= i; j++) {
//     star+= '* ';
//   }
//     star= star + '\n';
// }
// console.log(star);


// pyramid star pattern
// let n = 5;
// for (let i = n; i >= 1; i--) {
// let star = '';
//   for (let j = 1; j <= n - i; j++) {
//     star += ' ';
//   }
//   // print one star and then three star and then 5 start and so on
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     star += '*';
//   }
// console.log(star);

// }


// hollow square star pattern
let n = 5;
let star = '';
for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n+2; j++) {
    if (i === 1 || i === n || j === 1 || j === n+2) {
      star += '*';
    } else {
      star += ' ';
    }
  }
  star += '\n';
}

console.log(star);

