import { createNandGate } from "./nand-gate";

/**
 * @param input1
 * @param input2
 * @param label
 * @returns output
 *
 * Two bit MUX
 * A MUX gate is a three-input gate that uses one of the inputs, called the selector bit
 * to select one of the other two inputs, called data bits, and outputs only the selected data bit.
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

export const createMuxGate = (
  input1: HTMLInputElement,
  input2: HTMLInputElement,
  select: HTMLInputElement,
  label?: string
) => {
  return createNandGate(
    createNandGate(input1, createNandGate(select, select)),
    createNandGate(input2, select),
    label
  );
};
