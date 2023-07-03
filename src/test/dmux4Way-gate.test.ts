import { JSDOM } from "jsdom";
import { createDMux4WayGate } from "../modules/gates/dmux4Way-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * outputs {in, 0, 0, 0} if select === 00
 * outputs {0, in, 0, 0} if select === 01
 * outputs {0, 0, in, 0} if select === 10
 * outputs {0, 0, 0, in} if select === 11
 */
describe("DMux4Way16 gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    const container = document.getElementById("container") as HTMLDivElement;

    let input = document.createElement("input");
    container.appendChild(input);

    const select = [] as HTMLInputElement[];
    for (let i = 0; i < 2; i++) {
      let input = document.createElement("input");
      container.appendChild(input);
      select.push(input);
    }

    let output = createDMux4WayGate(input, select);

    return { input, select, output };
  };

  test("Select = 00", () => {
    const { input, output } = setupTest();

    expect(output[0].checked).toBe(false);
    expect(output[1].checked).toBe(false);
    expect(output[2].checked).toBe(false);
    expect(output[3].checked).toBe(false);

    fireEvent.click(input);
    expect(output[0].checked).toBe(true);
    expect(output[1].checked).toBe(false);
    expect(output[2].checked).toBe(false);
    expect(output[3].checked).toBe(false);
  });

  test("Select = 01", () => {
    const { input, select, output } = setupTest();

    fireEvent.click(select[0]);
    expect(output[0].checked).toBe(false);
    expect(output[1].checked).toBe(false);
    expect(output[2].checked).toBe(false);
    expect(output[3].checked).toBe(false);

    fireEvent.click(input);
    expect(output[0].checked).toBe(false);
    expect(output[1].checked).toBe(true);
    expect(output[2].checked).toBe(false);
    expect(output[3].checked).toBe(false);
  });

  test("Select = 10", () => {
    const { input, select, output } = setupTest();

    fireEvent.click(select[1]);
    expect(output[0].checked).toBe(false);
    expect(output[1].checked).toBe(false);
    expect(output[2].checked).toBe(false);
    expect(output[3].checked).toBe(false);

    fireEvent.click(input);
    expect(output[0].checked).toBe(false);
    expect(output[1].checked).toBe(false);
    expect(output[2].checked).toBe(true);
    expect(output[3].checked).toBe(false);
  });

  test("Select = 11", () => {
    const { input, select, output } = setupTest();

    fireEvent.click(select[0]);
    fireEvent.click(select[1]);
    expect(output[0].checked).toBe(false);
    expect(output[1].checked).toBe(false);
    expect(output[2].checked).toBe(false);
    expect(output[3].checked).toBe(false);

    fireEvent.click(input);
    expect(output[0].checked).toBe(false);
    expect(output[1].checked).toBe(false);
    expect(output[2].checked).toBe(false);
    expect(output[3].checked).toBe(true);
  });
});
