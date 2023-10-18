import { createNandGate } from "./nand-gate";
import { addCheckboxWithLabel } from "../utils/addCheckboxWithLabel";

/**
 * @param input1
 * @param input2
 * @param label
 * @returns output
 *
 * Two bit AND
 * spec:
 * 1 | 2 | out
 * -----------
 * 0 | 0 | 0
 * 0 | 1 | 0
 * 1 | 0 | 0
 * 1 | 1 | 1
 */

export const createAndGate = (
  input1: HTMLInputElement,
  input2: HTMLInputElement,
  label?: string
) => {
  const a = createNandGate(input1, input2, "nand a,b");
  const b = createNandGate(input1, input2, "nand a,b");

  return createNandGate(a, b, label);
};

export const initAndGate = () => {
  const input1 = addCheckboxWithLabel("Input 1");
  const input2 = addCheckboxWithLabel("Input 2");
  createAndGate(input1, input2, "Output");
};
