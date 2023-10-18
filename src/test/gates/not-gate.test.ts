import { JSDOM } from "jsdom";
import { createNotGate } from "../../modules/gates/not-gate";
import { describe, test, expect } from "vitest";
import { fireEvent } from "@testing-library/dom";

/**
 * spec:
 * i | out
 * -----------
 * 0 | 1
 * 1 | 0
 */

describe("Not gate", () => {
  const setupTest = () => {
    const dom = new JSDOM('<!DOCTYPE html><div id="container"></div>');
    global.document = dom.window.document;
    let input = document.createElement("input");
    input.type = "checkbox";
    input.checked = false;
    const container = document.getElementById("container") as HTMLDivElement;
    container.appendChild(input);
    let output = createNotGate(input);
    return { input, output };
  };

  test("Input unchecked should produce true", () => {
    const { output } = setupTest();
    expect(output.checked).toBe(true);
  });

  test("Input checked should produce false", () => {
    const { input, output } = setupTest();
    fireEvent.click(input);
    expect(output.checked).toBe(false);
  });
});
