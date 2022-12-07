import { CrateMover9001Stack } from "./crate-mover-9001-stack.js";
import { Queue } from "./queue.js";
import { getLineReader } from "./reader.js";

const args = process.argv.slice(2);
const filePath = args[0] || "test/fixtures/input.txt";
const lineReader = getLineReader({
  filePath,
});

type Instruction = {
  quantity: number;
  origin: number;
  destination: number;
};

const EVERY_FOUR_CHARACTERS = /.{1,4}/g;
const INSTRUCTION_DELIMITERS = /move|from|to/g;
const items = new Map<number, Queue>();
const stacksOfItems = new Map<number, CrateMover9001Stack>();
const instructions: Instruction[] = [];
let stackDiagramRead = false;

lineReader.on("line", (line) => {
  if (!stackDiagramRead && line.length) {
    const stackLayer = line.match(EVERY_FOUR_CHARACTERS) || [];
    const cleanedLayer = stackLayer.map((item) =>
      item.trim().replaceAll("[", "").replaceAll("]", "")
    );

    if (parseInt(cleanedLayer[0])) {
      // ignore the label line
      return;
    }

    return cleanedLayer.forEach((item, idx) => {
      const stackIndex = idx + 1;

      if (item.length) {
        const itemQueue = items.get(stackIndex);

        if (!itemQueue) {
          const newQueue = new Queue([item]);
          return items.set(stackIndex, newQueue);
        }

        itemQueue.insert(item);
      }
    });
  }

  if (!line) {
    items.forEach((itemQueue, key) => {
      stacksOfItems.set(key, itemQueue.toCrateMoverStack());
    });
    return (stackDiagramRead = true);
  }

  const instructionWithoutSpaces = line.trim().replaceAll(" ", "");
  const instruction = instructionWithoutSpaces
    .split(INSTRUCTION_DELIMITERS)
    .filter(Boolean)
    .map((command) => Number(command));

  const [quantity, origin, destination] = instruction;

  instructions.push({ quantity, origin, destination });
});

lineReader.on("close", () => {
  instructions.forEach(({ quantity, origin, destination }) => {
    const originStack = stacksOfItems.get(origin);
    const destinationStack = stacksOfItems.get(destination);

    if (!originStack || !destinationStack) {
      throw new Error("Failed to determine origin and destination");
    }

    const itemsToMove = originStack.pop(quantity);
    if (itemsToMove?.length && typeof itemsToMove === "object") {
      destinationStack.push(itemsToMove);
    }
  });

  console.log("\nRESULT");
  stacksOfItems.forEach((s, key) => {
    console.log(`\n`);
    s.print();
    console.log(`Stack ${key}`);
  });
});
