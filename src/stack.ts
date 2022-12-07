import { Queue } from "./queue.js";

export class Stack {
  stack: string[];

  constructor(initialValue: string[] = []) {
    this.stack = initialValue;
  }

  push(value: string) {
    this.stack.unshift(value);
  }
  pop() {
    return this.stack.shift();
  }
  print() {
    console.log(this.stack.join("\n"));
  }
  toQueue() {
    return new Queue([...this.stack]);
  }
}
