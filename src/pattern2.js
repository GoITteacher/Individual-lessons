class God {
  static instance;
  constructor() {
    if (!God.instance) {
      God.instance = this;
    }

    return God.instance;
  }
}

const god1 = new God();
const god2 = new God();
const god3 = new God();

console.log(god1 === god2);
