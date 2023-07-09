import { JSDOM } from "jsdom";
import { createHalfAdder } from "../../modules/adders/half-adder";
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
    let input2 = document.createElement("input");
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input1);
    container.appendChild(input2);
    let [sum, carry] = createHalfAdder(input1, input2);
    return { input1, input2, sum, carry };
  };

  test("0 + 0 should produce 0 sum, 0 carry", () => {
    const { sum, carry } = setupTest();
    expect(sum.checked).toBe(false);
    expect(carry.checked).toBe(false);
  });

  test("1 + 0 should produce 1 sum 0 carry", () => {
    const { input1, sum, carry } = setupTest();
    fireEvent.click(input1);
    expect(sum.checked).toBe(true);
    expect(carry.checked).toBe(false);
  });

  test("0 + 1 should produce 1 sum 0 carry", () => {
    const { input2, sum, carry } = setupTest();
    fireEvent.click(input2);
    expect(sum.checked).toBe(true);
    expect(carry.checked).toBe(false);
  });

  test("1 + 1 should produce 1 sum 1 carry", () => {
    const { input1, input2, sum, carry } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input2);
    expect(sum.checked).toBe(true);
    expect(carry.checked).toBe(true);
  });
});
