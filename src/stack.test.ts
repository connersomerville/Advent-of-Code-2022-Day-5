import { describe, it, expect, beforeEach } from "vitest";
import { Stack } from "./stack.js";

describe("Stack", () => {
  let testStack: Stack;

  beforeEach(() => {
    testStack = new Stack();
  });
  it("should allow construction with initial value", () => {
    const anotherStack = new Stack(["A", "B", "C"]);
    expect(anotherStack.pop()).toEqual("A");
    expect(anotherStack.pop()).toEqual("B");
    expect(anotherStack.pop()).toEqual("C");
    expect(anotherStack.pop()).toBeUndefined();
  });
  it("should return undefined if empty", () => {
    expect(testStack.pop()).toBeUndefined();
  });
  it("should return last item, first", () => {
    testStack.push("A");
    testStack.push("B");
    testStack.push("C");

    expect(testStack.pop()).toEqual("C");
    expect(testStack.pop()).toEqual("B");
    expect(testStack.pop()).toEqual("A");
    expect(testStack.pop()).toBeUndefined();
  });
});
