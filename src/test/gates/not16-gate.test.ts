import { JSDOM } from "jsdom";
import { createNot16Gate } from "../modules/gates/not16-gate";
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

function binaryNot(binary: string) {
  let result = "";
  for (let i = 0; i < binary.length; i++) {
    // Perform the "not" operation for each bit
    const bit = parseInt(binary[i]);
    const notResult = bit ? 0 : 1;
    result += notResult;
  }

  return result;
}

/**
 * spec:
 * for i = 0 to 15: out[i] = not(in[i])
 * if i === 1 then out = 0, else out = 1
 */
describe("Not16 gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    const container = document.getElementById("container") as HTMLDivElement;
    const inputs = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs.push(input);
    }

    let output = createNot16Gate(inputs);
    return { inputs, output };
  };

  test("Fuzz testing...", () => {
    const { inputs, output } = setupTest();
    let bin = generateRandomBinary(16);
    let expectedOutput = binaryNot(bin);

    for (let i = 0; i < 16; i++) {
      const input = inputs[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
      expect(output[i].checked).toBe(expectedOutput[i] === "1");
    }
  });
});
