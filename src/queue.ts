import { CrateMover9001Stack } from "./crate-mover-9001-stack.js";
import { Stack } from "./stack.js";

export class Queue {
  queue: string[];

  constructor(initialValue: string[] = []) {
    this.queue = initialValue;
  }

  insert(value: string) {
    this.queue.push(value);
  }
  remove() {
    return this.queue.shift();
  }
  print() {
    console.log(this.queue.join("\n"));
  }
  toStack() {
    return new Stack([...this.queue]);
  }
  toCrateMoverStack() {
    return new CrateMover9001Stack([...this.queue]);
  }
}
