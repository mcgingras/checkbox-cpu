import { createHalfAdder } from "./half-adder";
import { createOrGate } from "../gates/or-gate";

/**
 * @param input1
 * @param input2
 * @param input3
 * @returns sum, carry
 *
 * Full Adder
 * Computes the sum of three bits.
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

export const createFullAdder = (
  input1: HTMLInputElement,
  input2: HTMLInputElement,
  input3: HTMLInputElement
) => {
  const [ab, cab] = createHalfAdder(input1, input2);
  const [sum, s] = createHalfAdder(input3, ab);
  const carry = createOrGate(cab, s, "Real Carry");
  return [sum, carry];
};
