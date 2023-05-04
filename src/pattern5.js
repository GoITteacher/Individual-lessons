class Subject {
  constructor() {
    this.data;
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    let index = this.observers.indexOf(observer);

    if (index >= 0) {
      this.observers.splice(index, 1);
    }
  }

  notify(data) {
    this.data = data;
    this.observers.forEach((el) => {
      el.update(data);
    });
  }
}

class Observer {
  constructor(onUpdate) {
    this.data = null;
    this.update = onUpdate;
  }

  update(data) {
    this.data = data;
    console.log(`New data: ${this.data}`);
  }
}

let subject = new Subject();
let observer1 = new Observer((data) => {
  console.log("New Data");
});
let observer2 = new Observer((data) => {
  console.log("Hello Data");
});
let observer3 = new Observer((data) => {
  console.log("awd Data");
});
let observer4 = new Observer((data) => {
  console.log("awd Data");
});
let observer5 = new Observer((data) => {
  console.log("sef Data");
});

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);
subject.subscribe(observer4);
subject.subscribe(observer5);

subject.notify("Hello");
