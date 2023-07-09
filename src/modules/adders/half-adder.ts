import { createAndGate } from "../gates/and-gate";
import { createXorGate } from "../gates/xor-gate";

/**
 * @param input1
 * @param input2
 * @returns sum, carry
 *
 * Half Adder
 * Computes the sum of two bits.
 * spec:
 * 1 | 2 | s | c
 * -----------
 * 0 | 0 | 0 | 0
 * 0 | 1 | 1 | 0
 * 1 | 0 | 1 | 0
 * 1 | 1 | 1 | 1
 */

export const createHalfAdder = (
  input1: HTMLInputElement,
  input2: HTMLInputElement
) => {
  const sum = createXorGate(input1, input2, "Sum");
  const carry = createAndGate(input1, input2, "Carry");
  return [sum, carry];
};
