import { JSDOM } from "jsdom";
import { createNandGate } from "../modules/gates/nand-gate";

describe("NAND Gate", () => {
  let input1: HTMLInputElement,
    input2: HTMLInputElement,
    output: HTMLInputElement;

  beforeEach(() => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    input1 = document.createElement("input");
    input2 = document.createElement("input");
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input1);
    container.appendChild(input2);
    output = createNandGate(input1, input2);
  });

  // afterEach(() => {
  //   input1 = null;
  //   input2 = null;
  //   output = null;
  //   global.document = null;
  // });

  test("Both inputs unchecked should produce true", () => {
    expect(output.checked).toBe(true);
  });

  test("Input 1 checked and Input 2 unchecked should produce true", () => {
    input1.checked = true;
    expect(output.checked).toBe(true);
  });

  test("Input 1 unchecked and Input 2 checked should produce true", () => {
    input2.checked = true;
    expect(output.checked).toBe(true);
  });

  test("Both inputs checked should produce false", () => {
    input1.checked = true;
    input2.checked = true;
    expect(output.checked).toBe(false);
  });
});
