// push
// unshift
// append
// appendChild
// MAX
// MIN

// const arr = [3, 1, 4, 6, 78, 5, 2, 2, 1, 4, 6];
// const max = Math.max(...arr);

// const arr1 = [1, 2, 3, 4, 5, 7, 8, 9, 9, 7, 65];

// const newElems = [5, 2, 1, 3, 1, 3, 5, 7, 3];

// newElems.forEach((item) => {
//   arr1.push(item);
// });

// arr1.push(newElems[0], newElems[1], newElems[2]);

// arr1.push(...newElems);

// =========================

// const obj1 = {
//   x: "Hello",
//   y: "World",
// };

// const obj2 = {
//   t: "Some",
//   q: "Words",
// };

// const obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// ==========================

// ====+REST=========

// function foo(...arr) {
//   console.log(arr);
// }

// foo(5, 8, 3, 1, 3, 6, 7);

// function getTotal(...arr) {
//   let sum = 0;
//   arr.forEach((item) => {
//     sum += item;
//   });
//   return sum;
// }

// console.log(getTotal(1, 2, 3, 4, 56, 767, 54, 32));

// ======================

// const obj = {
//   x: 1,
//   y: 2,
//   q: 3,
//   t: 4,
//   u: 5,
//   i: 6,
// };

// const { q, t, ...newObj } = obj;
// console.log(q, t, newObj);

// const arr = [1, 3, 46, 7, 7, 3, 2, 1, 34];

// const [x1, , x3, ...newArr] = arr;

// console.log();

// ===========

// const book = {
//   id: 123123,
//   author: "ssefsef",
//   desc: "sefsefsef",
//   title: "adawdawd",
// };

// function updateBook({ id, ...book }) {
//   console.log(id, book);
// }

// updateBook(book);
