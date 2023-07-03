import { JSDOM } from "jsdom";
import { createMux16Gate } from "../modules/gates/mux16-gate";
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
 * if sel === 0 then for i = 0 to 15: out[i] = a[i] else for i = 0 to 15: out[i] = b[i]
 */
describe("Mux16 gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    const container = document.getElementById("container") as HTMLDivElement;
    const inputs1 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs1.push(input);
    }

    const inputs2 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs2.push(input);
    }

    const select = document.createElement("input");
    container.appendChild(select);

    let output = createMux16Gate(inputs1, inputs2, select);
    return { inputs1, inputs2, select, output };
  };

  test("Select = 0", () => {
    const { inputs1, inputs2, output } = setupTest();
    let bin1 = generateRandomBinary(16);
    let bin2 = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      const input2 = inputs2[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
      if (bin2[i] === "1") {
        fireEvent.click(input2);
      }
    }

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin1[i] === "1");
    }
  });

  test("Select = 1", () => {
    const { inputs1, inputs2, select, output } = setupTest();
    let bin1 = generateRandomBinary(16);
    let bin2 = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      const input2 = inputs2[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
      if (bin2[i] === "1") {
        fireEvent.click(input2);
      }
    }

    fireEvent.click(select);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin2[i] === "1");
    }
  });
});
