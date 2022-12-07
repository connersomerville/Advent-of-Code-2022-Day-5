import { describe, it, expect, beforeEach } from "vitest";
import { CrateMover9001Stack } from "./crate-mover-9001-stack.js";

describe("CrateMover9001Stack", () => {
  let testCrateMover9001Stack: CrateMover9001Stack;

  beforeEach(() => {
    testCrateMover9001Stack = new CrateMover9001Stack();
  });
  it("should allow construction with initial value", () => {
    const anotherCrateMover9001Stack = new CrateMover9001Stack(["A", "B", "C"]);
    expect(anotherCrateMover9001Stack.pop()).toEqual("A");
    expect(anotherCrateMover9001Stack.pop()).toEqual("B");
    expect(anotherCrateMover9001Stack.pop()).toEqual("C");
    expect(anotherCrateMover9001Stack.pop()).toBeUndefined();
  });
  it("should return undefined if empty", () => {
    expect(testCrateMover9001Stack.pop()).toBeUndefined();
  });
  it("should return last item, first", () => {
    testCrateMover9001Stack.push(["A"]);
    testCrateMover9001Stack.push(["B"]);
    testCrateMover9001Stack.push(["C"]);

    expect(testCrateMover9001Stack.pop()).toEqual("C");
    expect(testCrateMover9001Stack.pop()).toEqual("B");
    expect(testCrateMover9001Stack.pop()).toEqual("A");
    expect(testCrateMover9001Stack.pop()).toBeUndefined();
  });
  it("can push multiple items at once", () => {
    testCrateMover9001Stack.push(["A", "B", "C"]);

    expect(testCrateMover9001Stack.pop()).toEqual("A");
    expect(testCrateMover9001Stack.pop()).toEqual("B");
    expect(testCrateMover9001Stack.pop()).toEqual("C");
    expect(testCrateMover9001Stack.pop()).toBeUndefined();
  });
  it("can pop multiple items at once", () => {
    testCrateMover9001Stack.push(["A", "B", "C", "D", "E", "F"]);

    expect(testCrateMover9001Stack.pop(3)).toEqual(["A", "B", "C"]);
    expect(testCrateMover9001Stack.pop()).toEqual("D");
    expect(testCrateMover9001Stack.pop()).toEqual("E");
    expect(testCrateMover9001Stack.pop()).toEqual("F");
    expect(testCrateMover9001Stack.pop()).toBeUndefined();
  });
});
