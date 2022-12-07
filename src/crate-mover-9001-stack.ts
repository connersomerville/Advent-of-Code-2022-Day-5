import { Queue } from "./queue.js";

export class CrateMover9001Stack {
  stack: string[];

  constructor(initialValue: string[] = []) {
    this.stack = initialValue;
  }

  push(values: string[]) {
    this.stack.unshift(...values);
  }
  pop(numberOfItems?: number) {
    if (numberOfItems) {
      return this.stack.splice(0, numberOfItems);
    }
    return this.stack.shift();
  }
  print() {
    console.log(this.stack.join("\n"));
  }
  toQueue() {
    return new Queue([...this.stack]);
  }
}
