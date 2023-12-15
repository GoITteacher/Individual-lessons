const MyButton = (x) => {
  return `<div>${x}</div>`;
};

const User = (name, age) => {
  const myAge = age * 2;

  return `
        <div>
            Name:${name}
            ${MyButton(myAge)}
        <div>
    `;
};

console.log(User("Vova", 10));
