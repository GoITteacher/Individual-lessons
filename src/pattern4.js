const myModule = (function () {
  let privateNum = 10;
  function privateMethod() {
    console.log("Private", privateNum);
  }

  return {
    publicMethod() {
      privateMethod();
    },
    num: 20,
  };
})();

myModule.publicMethod();
