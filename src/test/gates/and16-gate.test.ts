import { JSDOM } from "jsdom";
import { createAnd16Gate } from "../../modules/gates/and16-gate";
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

function binaryAnd(binary1: string, binary2: string) {
  // Check if the binary strings have the same length
  if (binary1.length !== binary2.length) {
    throw new Error("Binary strings must have the same length");
  }

  let result = "";
  for (let i = 0; i < binary1.length; i++) {
    // Perform the "and" operation for each bit
    const bit1 = parseInt(binary1[i]);
    const bit2 = parseInt(binary2[i]);
    const andResult = bit1 & bit2;

    result += andResult;
  }

  return result;
}

/**
 * spec:
 * if a === 1 and b === 1 then out = 1, else out = 0
 */
describe("And gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    const container = document.getElementById("container") as HTMLDivElement;
    const inputs1 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      input.type = "checkbox";
      input.checked = false;
      container.appendChild(input);
      inputs1.push(input);
    }

    const inputs2 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      input.type = "checkbox";
      input.checked = false;
      container.appendChild(input);
      inputs2.push(input);
    }

    let output = createAnd16Gate(inputs1, inputs2);
    return { inputs1, inputs2, output };
  };

  test("Both groups of inputs unchecked should produce all false outputs", () => {
    const { output } = setupTest();
    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(false);
    }
  });

  test("Fuzz testing...", () => {
    const { inputs1, inputs2, output } = setupTest();
    let bin1 = generateRandomBinary(16);
    let bin2 = generateRandomBinary(16);
    let expectedOutput = binaryAnd(bin1, bin2);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      const input2 = inputs2[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
      if (bin2[i] === "1") {
        fireEvent.click(input2);
      }
      expect(output[i].checked).toBe(expectedOutput[i] === "1");
    }
  });
});
