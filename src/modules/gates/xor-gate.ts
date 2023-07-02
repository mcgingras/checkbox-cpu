import { createNotGate } from "./not-gate";
import { createAndGate } from "./and-gate";
import { createOrGate } from "./or-gate";

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
  const na = createNotGate(input1);
  const nb = createNotGate(input2);
  const c = createAndGate(na, input2);
  const d = createAndGate(input1, nb);
  return createOrGate(c, d, label);
};
