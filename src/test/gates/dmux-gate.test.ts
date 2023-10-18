import { JSDOM } from "jsdom";
import { createDMuxGate } from "../../modules/gates/dmux-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * i | s | 1 | 2
 * -----------
 * 0 | 0 | 0 | 0
 * 1 | 0 | 1 | 0
 * 0 | 1 | 0 | 0
 * 1 | 1 | 0 | 1
 */

describe("DMux gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = false;
    let select = document.createElement("input");
    select.type = "checkbox";
    select.checked = false;
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input);
    container.appendChild(select);
    let [output1, output2] = createDMuxGate(input, select);
    return { input, select, output1, output2 };
  };

  test("Input of 0 with select of 0 returns 0,0", () => {
    const { output1, output2 } = setupTest();
    expect(output1.checked).toBe(false);
    expect(output2.checked).toBe(false);
  });

  test("Input of 0 with select of 1 returns 0,0", () => {
    const { select, output1, output2 } = setupTest();
    fireEvent.click(select);
    expect(output1.checked).toBe(false);
    expect(output2.checked).toBe(false);
  });

  test("Input of 1 with select of 0 returns 1,0", () => {
    const { input, output1, output2 } = setupTest();
    fireEvent.click(input);
    expect(output1.checked).toBe(true);
    expect(output2.checked).toBe(false);
  });

  test("Input of 1 with select of 1 returns 0,1", () => {
    const { input, select, output1, output2 } = setupTest();
    fireEvent.click(input);
    fireEvent.click(select);
    expect(output1.checked).toBe(false);
    expect(output2.checked).toBe(true);
  });
});
