// function filter1() {
//   const arr = [20, 2, 3, 40, 5, 6, 70, 8];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }

// function filter1() {
//   const arr = [20, 2, 3, 40, 5, 6, 70, 8];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 10) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }
// function filter1() {
//   const arr = [20, 2, 3, 40, 5, 6, 70, 8];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }

// function filter(callback) {
//   const arr = [20, 2, 3, 40, 5, 6, 70, 8];
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback(arr[i], i, arr)) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
// }
// filter((el) => {
//   return el > 10;
// });

// filter((el) => {
//   return el < 10;
// });

// filter((el) => {
//   return el % 2 === 0;
// });
