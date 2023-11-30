// function foo() {
//   console.log(this);
// }

// const user1 = {
//   name: "Vasya",
//   test: foo,
// };

// const user2 = {
//   name: "Petya",
//   showName() {
//     console.log(user2.name);
//   },
// };

// const user3 = {
//   name: "Gosha",
//   showName: user2.showName,
// };

// user2.showName();

// user3.showName();

const user = {
  name: "Vasya",
  drive() {
    //this = user2;
    console.log(this, "....");
  },
};

const user2 = {
  name: "Petya",
};

// user.drive();

// user.drive.call(user2);
// user.drive.apply();

// const copy = user.drive.bind(user2)

// copy();
// copy.call(user);
