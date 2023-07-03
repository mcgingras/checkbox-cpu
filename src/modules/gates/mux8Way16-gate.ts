import { createMux16Gate } from "./mux16-gate";

/**
 * @param inputs1 - array16 of inputs
 * @param inputs2 - array16 of inputs
 * @param inputs3 - array16 of inputs
 * @param inputs4 - array16 of inputs
 * @param inputs5 - array16 of inputs
 * @param inputs6 - array16 of inputs
 * @param inputs7 - array16 of inputs
 * @param inputs8 - array16 of inputs
 * @param select  - array3 of inputs
 * @returns output as HTMLInputElement[16]
 *
 * 8 way mux
 * outputs i1 if select === 000
 * outputs i2 if select === 001
 * outputs i3 if select === 010
 * outputs i4 if select === 011
 * outputs i5 if select === 100
 * outputs i6 if select === 101
 * outputs i7 if select === 110
 * outputs i8 if select === 111
 */
export const createMux8Way16Gate = (
  inputs1: HTMLInputElement[],
  inputs2: HTMLInputElement[],
  inputs3: HTMLInputElement[],
  inputs4: HTMLInputElement[],
  inputs5: HTMLInputElement[],
  inputs6: HTMLInputElement[],
  inputs7: HTMLInputElement[],
  inputs8: HTMLInputElement[],
  select: HTMLInputElement[],
  label?: string
) => {
  const q = createMux16Gate(inputs1, inputs2, select[0]);
  const r = createMux16Gate(inputs3, inputs4, select[0]);
  const s = createMux16Gate(inputs5, inputs6, select[0]);
  const t = createMux16Gate(inputs7, inputs8, select[0]);
  const u = createMux16Gate(q, r, select[1]);
  const v = createMux16Gate(s, t, select[1]);
  return createMux16Gate(u, v, select[2], label);
};
