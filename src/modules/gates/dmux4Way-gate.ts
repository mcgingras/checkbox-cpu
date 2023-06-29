import { createDMuxGate } from "./dmux-gate";

/**
 * @param input - input
 * @param select  - array2 of inputs
 * @returns output as HTMLInputElement[4]
 *
 * 4 way dmux
 * outputs {in, 0, 0, 0} if select === 00
 * outputs {0, in, 0, 0} if select === 01
 * outputs {0, 0, in, 0} if select === 10
 * outputs {0, 0, 0, in} if select === 11
 */
export const createDMux4Way16Gate = (
  input: HTMLInputElement,
  select: HTMLInputElement[],
  label?: string
) => {
  const [a0, b0] = createDMuxGate(input, select[1]);
  const [a, b] = createDMuxGate(a0, select[0], label);
  const [c, d] = createDMuxGate(b0, select[0], label);
  return [a, b, c, d];
};
