import { JSDOM } from "jsdom";
import { createFullAdder } from "../../modules/adders/full-adder";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * 1 | 2 | 3 | s | c
 * -----------------
 * 0 | 0 | 0 | 0 | 0
 * 0 | 0 | 1 | 1 | 0
 * 0 | 1 | 0 | 1 | 0
 * 0 | 1 | 1 | 0 | 1
 * 1 | 0 | 0 | 1 | 0
 * 1 | 0 | 1 | 0 | 1
 * 1 | 1 | 0 | 0 | 1
 * 1 | 1 | 1 | 1 | 1
 */

describe("Full adder", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let input3 = document.createElement("input");
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(input3);
    let [sum, carry] = createFullAdder(input1, input2, input3);
    return { input1, input2, input3, sum, carry };
  };

  test("0 + 0 + 0 should produce 0 sum, 0 carry", () => {
    const { sum, carry } = setupTest();
    expect(sum.checked).toBe(false);
    expect(carry.checked).toBe(false);
  });

  test("0 + 0 + 1 should produce 1 sum 0 carry", () => {
    const { input1, sum, carry } = setupTest();
    fireEvent.click(input1);
    expect(sum.checked).toBe(true);
    expect(carry.checked).toBe(false);
  });

  test("0 + 1 + 0 should produce 1 sum 0 carry", () => {
    const { input2, sum, carry } = setupTest();
    fireEvent.click(input2);
    expect(sum.checked).toBe(true);
    expect(carry.checked).toBe(false);
  });

  test("0 + 1 + 1 should produce 0 sum 1 carry", () => {
    const { input1, input2, sum, carry } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input2);
    expect(sum.checked).toBe(false);
    expect(carry.checked).toBe(true);
  });

  test("1 + 0 + 0 should produce 1 sum 0 carry", () => {
    const { input3, sum, carry } = setupTest();
    fireEvent.click(input3);
    expect(sum.checked).toBe(true);
    expect(carry.checked).toBe(false);
  });

  test("1 + 0 + 1 should produce 0 sum 1 carry", () => {
    const { input1, input3, sum, carry } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input3);
    expect(sum.checked).toBe(false);
    expect(carry.checked).toBe(true);
  });

  test("1 + 1 + 0 should produce 0 sum 1 carry", () => {
    const { input2, input3, sum, carry } = setupTest();
    fireEvent.click(input2);
    fireEvent.click(input3);
    expect(sum.checked).toBe(false);
    expect(carry.checked).toBe(true);
  });

  test("1 + 1 + 1 should produce 1 sum 1 carry", () => {
    const { input1, input2, input3, sum, carry } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input2);
    fireEvent.click(input3);
    expect(sum.checked).toBe(true);
    expect(carry.checked).toBe(true);
  });
});
