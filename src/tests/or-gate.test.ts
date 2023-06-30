import { JSDOM } from "jsdom";
import { createOrGate } from "../modules/gates/or-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * 1 | 2 | out
 * -----------
 * 0 | 0 | 0
 * 0 | 1 | 1
 * 1 | 0 | 1
 * 1 | 1 | 1
 */

describe("Or gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input1);
    container.appendChild(input2);
    let output = createOrGate(input1, input2);
    return { input1, input2, output };
  };

  test("Both inputs unchecked should produce false", () => {
    const { output } = setupTest();
    expect(output.checked).toBe(false);
  });

  test("Input 1 checked and Input 2 unchecked should produce true", () => {
    const { input1, output } = setupTest();
    fireEvent.click(input1);
    expect(output.checked).toBe(true);
  });

  test("Input 1 unchecked and Input 2 checked should produce true", () => {
    const { input2, output } = setupTest();
    fireEvent.click(input2);
    expect(output.checked).toBe(true);
  });

  test("Both inputs checked should produce true", () => {
    const { input1, input2, output } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input2);
    expect(output.checked).toBe(true);
  });
});
