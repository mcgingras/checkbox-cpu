import { createNandGate } from "./nand-gate";

/**
 * @param input1
 * @param input2
 * @param label
 * @returns output
 *
 * Two bit XOR
 * spec:
 * 0 | 1 | out
 * -----------
 * 0 | 0 | 0
 * 1 | 0 | 1
 * 0 | 1 | 1
 * 1 | 1 | 0
 */
export const createXorGate = (
  input1: HTMLInputElement,
  input2: HTMLInputElement,
  label?: string
) => {
  const a = createNandGate(input1, input2);
  const b = createNandGate(input1, a);
  const c = createNandGate(input1, a);
  return createNandGate(b, c, label);
};
