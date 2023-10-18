import { createNandGate } from "./nand-gate";
import { addCheckboxWithLabel } from "../utils/addCheckboxWithLabel";

/**
 * @param input1
 * @param select
 * @param label
 * @returns [output1, output2]
 *
 * Two bit DMUX
 * A demultiplexer performs the opposite function of a multiplexer:
 * It takes a single input and channels it to one of two possible outputs
 * according to a selector bit that specifies which output to choose.
 * spec:
 * i | s | 1 | 2
 * -----------
 * 0 | 0 | 0 | 0
 * 1 | 0 | 1 | 0
 * 0 | 1 | 0 | 0
 * 1 | 1 | 0 | 1
 */

export const createDMuxGate = (
  input1: HTMLInputElement,
  select: HTMLInputElement,
  label1?: string,
  label2?: string
) => {
  const selectNand = createNandGate(select, select, "Nand (select, select)");
  const path1 = createNandGate(input1, selectNand, "Nand (input, select)");
  const path2 = createNandGate(input1, select, "Nand (input, select)");
  const output1 = createNandGate(path1, path1, label1, true);
  const output2 = createNandGate(path2, path2, label2, true);

  return [output1, output2];
};

export const initDMuxGate = () => {
  const input1 = addCheckboxWithLabel("Input");
  const select = addCheckboxWithLabel("Select");
  createDMuxGate(input1, select, "Output 1", "Output 2");
};
