import { JSDOM } from "jsdom";
import { createMux8Way16Gate } from "../modules/gates/mux8Way16-gate";
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
 * outputs i1 if select === 000
 * outputs i2 if select === 001
 * outputs i3 if select === 010
 * outputs i4 if select === 011
 * outputs i5 if select === 100
 * outputs i6 if select === 101
 * outputs i7 if select === 110
 * outputs i8 if select === 111
 */
describe("Mux4Way16 gate", () => {
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

    const inputs3 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs3.push(input);
    }

    const inputs4 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs4.push(input);
    }

    const inputs5 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs5.push(input);
    }

    const inputs6 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs6.push(input);
    }

    const inputs7 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs7.push(input);
    }

    const inputs8 = [] as HTMLInputElement[];
    for (let i = 0; i < 16; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      inputs8.push(input);
    }

    const select = [
      document.createElement("input"),
      document.createElement("input"),
      document.createElement("input"),
    ];
    container.appendChild(select[0]);
    container.appendChild(select[1]);
    container.appendChild(select[2]);

    let output = createMux8Way16Gate(
      inputs1,
      inputs2,
      inputs3,
      inputs4,
      inputs5,
      inputs6,
      inputs7,
      inputs8,
      select
    );

    return {
      inputs1,
      inputs2,
      inputs3,
      inputs4,
      inputs5,
      inputs6,
      inputs7,
      inputs8,

      select,
      output,
    };
  };

  test("Select = 000", () => {
    const { inputs1, output } = setupTest();
    let bin1 = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input1 = inputs1[i];
      if (bin1[i] === "1") {
        fireEvent.click(input1);
      }
    }

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin1[i] === "1");
    }
  });

  test("Select = 001", () => {
    const { inputs2, select, output } = setupTest();
    let bin = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input = inputs2[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    fireEvent.click(select[0]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin[i] === "1");
    }
  });

  test("Select = 010", () => {
    const { inputs3, select, output } = setupTest();
    let bin = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input = inputs3[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    fireEvent.click(select[1]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin[i] === "1");
    }
  });

  test("Select = 011", () => {
    const { inputs4, select, output } = setupTest();
    let bin = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input = inputs4[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    fireEvent.click(select[1]);
    fireEvent.click(select[0]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin[i] === "1");
    }
  });

  test("Select = 100", () => {
    const { inputs5, select, output } = setupTest();
    let bin = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input = inputs5[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    fireEvent.click(select[2]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin[i] === "1");
    }
  });

  test("Select = 101", () => {
    const { inputs6, select, output } = setupTest();
    let bin = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input = inputs6[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    fireEvent.click(select[0]);
    fireEvent.click(select[2]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin[i] === "1");
    }
  });

  test("Select = 110", () => {
    const { inputs7, select, output } = setupTest();
    let bin = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input = inputs7[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    fireEvent.click(select[1]);
    fireEvent.click(select[2]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin[i] === "1");
    }
  });

  test("Select = 111", () => {
    const { inputs8, select, output } = setupTest();
    let bin = generateRandomBinary(16);

    for (let i = 0; i < 16; i++) {
      const input = inputs8[i];
      if (bin[i] === "1") {
        fireEvent.click(input);
      }
    }

    fireEvent.click(select[0]);
    fireEvent.click(select[1]);
    fireEvent.click(select[2]);

    for (let i = 0; i < 16; i++) {
      expect(output[i].checked).toBe(bin[i] === "1");
    }
  });
});
