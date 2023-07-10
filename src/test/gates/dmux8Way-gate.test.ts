import { JSDOM } from "jsdom";
import { createDMux8WayGate } from "../../modules/gates/dmux8Way-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * outputs {in, 0, 0, 0, 0, 0, 0, 0} if select === 000
 * outputs {0, in, 0, 0, 0, 0, 0, 0} if select === 001
 * outputs {0, 0, in, 0, 0, 0, 0, 0} if select === 010
 * outputs {0, 0, 0, in, 0, 0, 0, 0} if select === 011
 * outputs {0, 0, 0, 0, in, 0, 0, 0} if select === 100
 * outputs {0, 0, 0, 0, 0, in, 0, 0} if select === 101
 * outputs {0, 0, 0, 0, 0, 0, in, 0} if select === 110
 * outputs {0, 0, 0, 0, 0, 0, 0, in} if select === 111
 */
describe("DMux4Way16 gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    const container = document.getElementById("container") as HTMLDivElement;

    let input = document.createElement("input");
    container.appendChild(input);

    const select = [] as HTMLInputElement[];
    for (let i = 0; i < 3; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      select.push(input);
    }

    let output = createDMux8WayGate(input, select);

    return { input, select, output };
  };

  test("Select = 000", () => {
    const { input, output } = setupTest();
    let num = 0;
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });

  test("Select = 001", () => {
    const { input, select, output } = setupTest();
    let num = 1;
    fireEvent.click(select[0]);
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });

  test("Select = 010", () => {
    const { input, select, output } = setupTest();
    let num = 2;
    fireEvent.click(select[1]);
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });
  test("Select = 011", () => {
    const { input, select, output } = setupTest();
    let num = 3;
    fireEvent.click(select[0]);
    fireEvent.click(select[1]);
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });
  test("Select = 100", () => {
    const { input, select, output } = setupTest();
    let num = 4;
    fireEvent.click(select[2]);
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });
  test("Select = 101", () => {
    const { input, select, output } = setupTest();
    let num = 5;
    fireEvent.click(select[0]);
    fireEvent.click(select[2]);
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });
  test("Select = 110", () => {
    const { input, select, output } = setupTest();
    let num = 6;
    fireEvent.click(select[1]);
    fireEvent.click(select[2]);
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });
  test("Select = 111", () => {
    const { input, select, output } = setupTest();
    let num = 7;
    fireEvent.click(select[0]);
    fireEvent.click(select[1]);
    fireEvent.click(select[2]);
    for (let i = 0; i < 8; i++) {
      expect(output[i].checked).toBe(false);
    }

    fireEvent.click(input);
    for (let i = 0; i < 8; i++) {
      if (i === num) {
        expect(output[i].checked).toBe(true);
      } else {
        expect(output[i].checked).toBe(false);
      }
    }
  });
});
