import { JSDOM } from "jsdom";
import { createOr8WayGate } from "../modules/gates/or8Way-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

function generateRandomBinary(length: number) {
  let binaryNumber = "";
  for (let i = 0; i < length; i++) {
    const randomBit = Math.round(Math.random());
    binaryNumber += randomBit;
  }
  return binaryNumber;
}

/**
 * spec:
 * outputs 1 if any of the inputs are 1 else 0
 */
describe("Or8Way gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    const container = document.getElementById("container") as HTMLDivElement;
    const inputs = [] as HTMLInputElement[];
    for (let i = 0; i < 8; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs.push(input);
    }

    let output = createOr8WayGate(inputs);
    return { inputs, output };
  };

  test("Fuzz testing...", () => {
    const { inputs, output } = setupTest();
    let bin = generateRandomBinary(8);

    for (let i = 0; i < 16; i++) {
      const input = inputs[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    expect(output.checked).toBe(bin.includes("1"));
  });
});
