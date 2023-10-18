import { JSDOM } from "jsdom";
import { createMux4Way16Gate } from "../../modules/gates/mux4Way16-gate";
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
 * outputs i1 if select === 00
 * outputs i2 if select === 01
 * outputs i3 if select === 10
 * outputs i4 if select === 11
 */
describe("Mux4Way16 gate", () => {
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

    const inputs3 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      input.type = "checkbox";
      input.checked = false;
      container.appendChild(input);
      inputs3.push(input);
    }

    const inputs4 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      input.type = "checkbox";
      input.checked = false;
      container.appendChild(input);
      inputs4.push(input);
    }

    const select = [
      document.createElement("input"),
      document.createElement("input"),
    ];
    select[0].type = "checkbox";
    select[0].checked = false;
    select[1].type = "checkbox";
    select[1].checked = false;
    container.appendChild(select[0]);
    container.appendChild(select[1]);

    let output = createMux4Way16Gate(
      inputs1,
      inputs2,
      inputs3,
      inputs4,
      select
    );

    return { inputs1, inputs2, inputs3, inputs4, select, output };
  };

  test("Select = 0", () => {
    const { inputs1, inputs2, inputs3, inputs4, output } = setupTest();
    let bin1 = generateRandomBinary(16);
    let bin2 = generateRandomBinary(16);
    let bin3 = generateRandomBinary(16);
    let bin4 = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      const input2 = inputs2[i];
      const input3 = inputs3[i];
      const input4 = inputs4[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
      if (bin2[i] === "1") {
        fireEvent.click(input2);
      }
      if (bin3[i] === "1") {
        fireEvent.click(input3);
      }
      if (bin4[i] === "1") {
        fireEvent.click(input4);
      }
    }

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin1[i] === "1");
    }
  });

  test("Select = 01", () => {
    const { inputs1, inputs2, inputs3, inputs4, select, output } = setupTest();
    let bin1 = generateRandomBinary(16);
    let bin2 = generateRandomBinary(16);
    let bin3 = generateRandomBinary(16);
    let bin4 = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      const input2 = inputs2[i];
      const input3 = inputs3[i];
      const input4 = inputs4[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
      if (bin2[i] === "1") {
        fireEvent.click(input2);
      }
      if (bin3[i] === "1") {
        fireEvent.click(input3);
      }
      if (bin4[i] === "1") {
        fireEvent.click(input4);
      }
    }

    fireEvent.click(select[0]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin2[i] === "1");
    }
  });

  test("Select = 10", () => {
    const { inputs1, inputs2, inputs3, inputs4, select, output } = setupTest();
    let bin1 = generateRandomBinary(16);
    let bin2 = generateRandomBinary(16);
    let bin3 = generateRandomBinary(16);
    let bin4 = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      const input2 = inputs2[i];
      const input3 = inputs3[i];
      const input4 = inputs4[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
      if (bin2[i] === "1") {
        fireEvent.click(input2);
      }
      if (bin3[i] === "1") {
        fireEvent.click(input3);
      }
      if (bin4[i] === "1") {
        fireEvent.click(input4);
      }
    }

    fireEvent.click(select[1]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin3[i] === "1");
    }
  });

  test("Select = 11", () => {
    const { inputs1, inputs2, inputs3, inputs4, select, output } = setupTest();
    let bin1 = generateRandomBinary(16);
    let bin2 = generateRandomBinary(16);
    let bin3 = generateRandomBinary(16);
    let bin4 = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      const input2 = inputs2[i];
      const input3 = inputs3[i];
      const input4 = inputs4[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
      if (bin2[i] === "1") {
        fireEvent.click(input2);
      }
      if (bin3[i] === "1") {
        fireEvent.click(input3);
      }
      if (bin4[i] === "1") {
        fireEvent.click(input4);
      }
    }

    fireEvent.click(select[0]);
    fireEvent.click(select[1]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin4[i] === "1");
    }
  });
});
