import { createMux16Gate } from "../gates/mux16-gate";
import { createNot16Gate } from "../gates/not16-gate";
import { create16BitAdder } from "../adders/add-16";
import { createAnd16Gate } from "../gates/and16-gate";
import { createOr16WayGate } from "../gates/or16Way-gate";
import { createNotGate } from "../gates/not-gate";
// utils
import { addCheckboxWithLabel } from "../utils/addCheckboxWithLabel";

/**
 * @param input1
 * @param input2
 * @param zx - zero the x input
 * @param nx - negate the x input
 * @param zy - zero the y input
 * @param ny - negate the y input
 * @param f - if f = 1 then out = x + y else out = x & y
 * @param no - negate the out
 * @returns out - the result of the operation, zr - true if out = 0, ng - true if out < 0
 * @description
 * if zx x = 0 16 bit zero constant
 * if nx x = !x bit-wise negation
 * if zy y = 0 16 bit zero constant
 * if ny y = !y bit-wise negation
 * if f out = x + y twos complement addition
 * else out x & y bit-wise and
 * if no out = !out bit-wise negation
 * if out === 0 zr = 1 else zr = 0 16 bit equality comparison
 * if out < 0 ng = 1 else ng = 0 16 two's complement comparison
 * @comment The overflow bit is ignored.
 *
 * 16 Bit ALU
 */

export const createALU = (
  x: HTMLInputElement[],
  y: HTMLInputElement[],
  zx: HTMLInputElement,
  nx: HTMLInputElement,
  zy: HTMLInputElement,
  ny: HTMLInputElement,
  f: HTMLInputElement,
  no: HTMLInputElement
) => {
  // zero bit
  const zeros = [] as HTMLInputElement[];
  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.disabled = true;
    zeros.push(input);
    document.body.appendChild(input);
    document.body.appendChild(document.createElement("br"));
  }

  const ones = [] as HTMLInputElement[];
  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.disabled = true;
    input.checked = true;
    ones.push(input);
    document.body.appendChild(input);
    document.body.appendChild(document.createElement("br"));
  }

  // zx - zero the x input
  const xZeroed = createMux16Gate(x, zeros, zx);
  // nx = negate the x input
  const xNegated = createNot16Gate(xZeroed);
  // choose x or nx
  const xNegatedMux = createMux16Gate(xZeroed, xNegated, nx);
  // zy - zero the y input
  const yZeroed = createMux16Gate(y, zeros, zy);
  // ny - negate the y input
  const yNegated = createNot16Gate(yZeroed);
  // choose y or ny
  const yNegatedMux = createMux16Gate(yZeroed, yNegated, ny);

  // f - if f = 1 then out = x + y else out = x & y
  const added = create16BitAdder(xNegatedMux, yNegatedMux);
  const anded = createAnd16Gate(xNegatedMux, yNegatedMux);
  const fxy = createMux16Gate(anded, added, f);

  // no
  const oNegated = createNot16Gate(fxy);
  const oNegatedMux = createMux16Gate(fxy, oNegated, no);

  // zr - true if out = 0
  const zrn = createOr16WayGate(oNegatedMux);
  const zr = createNotGate(zrn);

  // ng - true if out < 0
  const ng = oNegatedMux[15];

  return [oNegatedMux, zr, ng];
};

export const initALU = () => {
  const zx = addCheckboxWithLabel("zx");
  const nx = addCheckboxWithLabel("nx");
  const zy = addCheckboxWithLabel("zy");
  const ny = addCheckboxWithLabel("ny");
  const f = addCheckboxWithLabel("f");
  const no = addCheckboxWithLabel("no");

  const inputs1 = [] as HTMLInputElement[];
  const inputs2 = [] as HTMLInputElement[];

  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    inputs1.push(input);
    document.body.appendChild(input);
    document.body.appendChild(document.createTextNode("Input A " + i));
    document.body.appendChild(document.createElement("br"));
  }

  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    inputs2.push(input);
    document.body.appendChild(input);
    document.body.appendChild(document.createTextNode("Input B " + i));
    document.body.appendChild(document.createElement("br"));
  }

  createALU(inputs1, inputs2, zx, nx, zy, ny, f, no);
};
