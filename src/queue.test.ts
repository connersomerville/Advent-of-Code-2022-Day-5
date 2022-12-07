import { describe, it, expect, beforeEach } from "vitest";
import { Queue } from "./queue.js";

describe("Queue", () => {
  let testQueue: Queue;

  beforeEach(() => {
    testQueue = new Queue();
  });
  it("should allow construction with initial value", () => {
    const anotherQueue = new Queue(["A", "B", "C"]);
    expect(anotherQueue.remove()).toEqual("A");
    expect(anotherQueue.remove()).toEqual("B");
    expect(anotherQueue.remove()).toEqual("C");
    expect(anotherQueue.remove()).toBeUndefined();
  });
  it("should return undefined if empty", () => {
    expect(testQueue.remove()).toBeUndefined();
  });
  it("should return first item, first", () => {
    testQueue.insert("A");
    testQueue.insert("B");
    testQueue.insert("C");

    expect(testQueue.remove()).toEqual("A");
    expect(testQueue.remove()).toEqual("B");
    expect(testQueue.remove()).toEqual("C");
    expect(testQueue.remove()).toBeUndefined();
  });
});
