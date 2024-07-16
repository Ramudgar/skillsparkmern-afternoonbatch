// // promise

// const goDate = new Promise((resolve, reject) => {
//   const dating = 10;
//   if (dating) {
//     resolve("Date is confirmed");
//   } else {
//     reject("Date is not confirmed");
//   }
// });

// goDate
//   .then((resolved_data) => {
//     console.log(resolved_data);
//   })
//   .catch((rejected_data) => {
//     console.log(rejected_data);
//   });

// //

// const getResult = new Promise((res, reject) => {
//   const result = 10;
//   if (result) {
//     res("Result is confirmed");
//   } else {
//     reject("Result is not confirmed");
//   }
// });

// getResult
//   .then((res_data) => {
//     console.log(res_data);
//   })
//   .catch((rej_data) => {
//     console.log(rej_data);
//   });

// async await

const goDates = new Promise((resolve, reject) => {
  const dating = 10;
  setTimeout(() => {
    if (dating) {
      resolve("Date is confirmed");
    } else {
      reject("Date is not confirmed");
    }
  }, 2000);
});

async function date() {
  try {
    const result = await goDates;
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}

date();
