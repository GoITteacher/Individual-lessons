const array = [1, 2, 3];

class Iterator {
  data;
  index = 0;
  constructor(data) {
    this.data = data;
  }

  next() {
    if (!this.isTheEnd()) return this.data[this.index++];

    return null;
  }

  prev() {}

  isTheEnd() {
    return this.index >= this.data.length;
  }

  reset() {
    this.index = 0;
  }
}

for (let iterator = new Iterator(array); !iterator.isTheEnd(); ) {
  const value = iterator.next();
  console.log(value);
}
