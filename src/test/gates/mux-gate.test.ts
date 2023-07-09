import { JSDOM } from "jsdom";
import { createMuxGate } from "../modules/gates/mux-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * 1 | 2 | s | out
 * -----------
 * 0 | 0 | 0 | 0
 * 0 | 1 | 0 | 0
 * 1 | 0 | 0 | 1
 * 1 | 1 | 0 | 1
 * 0 | 0 | 1 | 0
 * 0 | 1 | 1 | 1
 * 1 | 0 | 1 | 0
 * 1 | 1 | 1 | 1
 */

describe("Mux gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    let input1 = document.createElement("input");
    let input2 = document.createElement("input");
    let select = document.createElement("input");
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input1);
    container.appendChild(input2);
    container.appendChild(select);
    let output = createMuxGate(input1, input2, select);
    return { input1, input2, select, output };
  };

  test("Both inputs unchecked with select unchecked should produce false", () => {
    const { output } = setupTest();
    expect(output.checked).toBe(false);
  });

  test("Input 1 unchecked and Input 2 checked with select unchecked should produce false", () => {
    const { input2, output } = setupTest();
    fireEvent.click(input2);
    expect(output.checked).toBe(false);
  });

  test("Input 1 checked and Input 2 unchecked with select unchecked should produce true", () => {
    const { input1, output } = setupTest();
    fireEvent.click(input1);
    expect(output.checked).toBe(true);
  });

  test("Both inputs checked with select unchecked should produce true", () => {
    const { input1, input2, output } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input2);
    expect(output.checked).toBe(true);
  });

  test("Both inputs unchecked with select checked should produce false", () => {
    const { select, output } = setupTest();
    fireEvent.click(select);
    expect(output.checked).toBe(false);
  });

  test("Input 1 unchecked and Input 2 checked with select checked should produce true", () => {
    const { input2, select, output } = setupTest();
    fireEvent.click(input2);
    fireEvent.click(select);
    expect(output.checked).toBe(true);
  });

  test("Input 1 checked and Input 2 unchecked with select checked should produce false", () => {
    const { input1, select, output } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(select);
    expect(output.checked).toBe(false);
  });

  test("Both inputs checked with select checked should produce true", () => {
    const { input1, input2, select, output } = setupTest();
    fireEvent.click(input1);
    fireEvent.click(input2);
    fireEvent.click(select);
    expect(output.checked).toBe(true);
  });
});
