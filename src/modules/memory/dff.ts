// import { createNandGate } from "../gates/nand-gate";
// import { createNotGate } from "../gates/not-gate";

/**
 * @param input
 * @param clock
 * @param label
 * @returns output, output
 *
 * Data Flip Flop
 */

export const createDFF = (
  input: HTMLInputElement,
  clk: HTMLInputElement,
  label?: string
) => {
  // TODO: replace with real DFF (if possible?)
  dffCheat(input, clk, label);
};

// I'm having a hard time implementing the DFF out of my gates because the input relies on the output in a cyclical way
// that is hard to model. So, this "cheat" DFF won't actually be built out of NAND gates but will just be a passthrough
// layer that takes inputs and outputs and follows the DFF interface.
const dffCheat = (
  input: HTMLInputElement,
  clk: HTMLInputElement,
  label?: string
) => {
  // todo
  console.log(input);
  console.log(clk);
  console.log(label);
  // return [q, qp]
};

// const [q, qp] = createDFF(input, clk, label);
// api to handle this programatically
// clk.click -> toggles clock
// input.click -> toggles input
