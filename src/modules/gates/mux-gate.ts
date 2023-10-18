import { createNandGate } from "./nand-gate";
import { addCheckboxWithLabel } from "../utils/addCheckboxWithLabel";

/**
 * @param input1
 * @param input2
 * @param select
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
    createNandGate(
      input1,
      createNandGate(select, select, "Nand(s,s)"),
      "Nand(a,Nand(s,s))"
    ),
    createNandGate(input2, select, "Nand(b,s)"),
    label,
    true
  );
};

export const initMuxGate = () => {
  const input1 = addCheckboxWithLabel("Input A");
  const input2 = addCheckboxWithLabel("Input B");
  const select = addCheckboxWithLabel("Select");
  createMuxGate(
    input1,
    input2,
    select,
    "Output (Nand(Nand(a,Nand(s,s)),Nand(b,s)))"
  );
};
