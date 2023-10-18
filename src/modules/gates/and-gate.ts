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
  const a = createNandGate(input1, input2, "Nand (a,b)");
  const b = createNandGate(input1, input2, "Nand (a,b)");

  return createNandGate(a, b, label, true);
};

export const initAndGate = () => {
  const input1 = addCheckboxWithLabel("Input A");
  const input2 = addCheckboxWithLabel("Input B");
  createAndGate(input1, input2, "Output (Nand(Nand(a,b),Nand(a,b)))");
};
