import { JSDOM } from "jsdom";
import { createAndGate } from "../../modules/gates/and-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * 1 | 2 | s | c
 * -----------
 * 0 | 0 | 0 | 0
 * 0 | 1 | 1 | 0
 * 1 | 0 | 1 | 0
 * 1 | 1 | 1 | 1
 */

describe("And gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    let input1 = document.createElement("input");
    input1.type = "checkbox";
    input1.checked = false;
    let input2 = document.createElement("input");
    input2.type = "checkbox";
    input2.checked = false;
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input1);
    container.appendChild(input2);
    let output = createAndGate(input1, input2);
    return { input1, input2, output };
  };

  test("Both inputs unchecked should produce false", () => {
    const { output } = setupTest();
    expect(output.checked).toBe(false);
  });

  test("Input 1 checked and Input 2 unchecked should produce false", () => {
    const { input1, output } = setupTest();
    fireEvent.click(input1);
    expect(output.checked).toBe(false);
  });

  test("Input 1 unchecked and Input 2 checked should produce false", () => {
    const { input2, output } = setupTest();
    fireEvent.click(input2);
    expect(output.checked).toBe(false);
  });

  test("Both inputs checked should produce true", () => {
    const { input1, input2, output } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input2);
    expect(output.checked).toBe(true);
  });
});
