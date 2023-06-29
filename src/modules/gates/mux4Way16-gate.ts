import { createMux16Gate } from "./mux16-gate";

/**
 * @param inputs1 - array16 of inputs
 * @param inputs2 - array16 of inputs
 * @param inputs3 - array16 of inputs
 * @param inputs4 - array16 of inputs
 * @param select  - array2 of inputs
 * @returns output as HTMLInputElement
 *
 * 4 way mux
 * outputs i1 if select === 00
 * outputs i2 if select === 01
 * outputs i3 if select === 10
 * outputs i4 if select === 11
 */
export const createMux4Way16Gate = (
  inputs1: HTMLInputElement[],
  inputs2: HTMLInputElement[],
  inputs3: HTMLInputElement[],
  inputs4: HTMLInputElement[],
  select: HTMLInputElement[],
  label?: string
) => {
  const q = createMux16Gate(inputs1, inputs2, select[0]);
  const r = createMux16Gate(inputs3, inputs4, select[0]);
  return createMux16Gate(q, r, select[1], label);
};
