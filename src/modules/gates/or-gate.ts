import { createNandGate } from "./nand-gate";

/**
 * @param input1
 * @param input2
 * @param label
 * @returns output
 *
 * Two bit OR
 * spec:
 * 0 | 1 | out
 * -----------
 * 0 | 0 | 0
 * 1 | 0 | 1
 * 0 | 1 | 1
 * 1 | 1 | 1
 */
export const createOrGate = (
  input1: HTMLInputElement,
  input2: HTMLInputElement,
  label?: string
) => {
  const a = createNandGate(input1, input1);
  const b = createNandGate(input2, input2);
  return createNandGate(a, b, label);
};
