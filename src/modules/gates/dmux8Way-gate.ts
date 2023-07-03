import { createDMuxGate } from "./dmux-gate";

/**
 * @param input - input
 * @param select  - array3 of inputs
 * @returns output as HTMLInputElement[8]
 *
 * 8 way dmux
 * outputs {in, 0, 0, 0, 0, 0, 0, 0} if select === 000
 * outputs {0, in, 0, 0, 0, 0, 0, 0} if select === 001
 * outputs {0, 0, in, 0, 0, 0, 0, 0} if select === 010
 * outputs {0, 0, 0, in, 0, 0, 0, 0} if select === 011
 * outputs {0, 0, 0, 0, in, 0, 0, 0} if select === 100
 * outputs {0, 0, 0, 0, 0, in, 0, 0} if select === 101
 * outputs {0, 0, 0, 0, 0, 0, in, 0} if select === 110
 * outputs {0, 0, 0, 0, 0, 0, 0, in} if select === 111
 */
export const createDMux8WayGate = (
  input: HTMLInputElement,
  select: HTMLInputElement[],
  label?: string
) => {
  const [a0, b0] = createDMuxGate(input, select[2]);
  const [a00, b00] = createDMuxGate(a0, select[1]);
  const [c00, d00] = createDMuxGate(b0, select[1]);
  const [a, b] = createDMuxGate(a00, select[0], label);
  const [c, d] = createDMuxGate(b00, select[0], label);
  const [e, f] = createDMuxGate(c00, select[0], label);
  const [g, h] = createDMuxGate(d00, select[0], label);
  return [a, b, c, d, e, f, g, h];
};
