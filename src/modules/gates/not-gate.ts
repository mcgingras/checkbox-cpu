import { createNandGate } from "./nand-gate";

/**
 * @param input
 * @param label
 * @returns output
 *
 * Two bit NOT
 * spec:
 * 0 | out
 * -----------
 * 0 | 1
 * 1 | 0
 */
export const createNotGate = (input: HTMLInputElement, label?: string) => {
  createNandGate(input, input, label);
};
