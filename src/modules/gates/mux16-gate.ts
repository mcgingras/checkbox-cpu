import { createMuxGate } from "./mux-gate";

/**
 * @param inputs1 - array of inputs
 * @param inputs2 - array of inputs
 * @param select - select input
 * @param label - string
 * @returns output as HTMLInputElement[]
 *
 * 16 bit MUX
 * if sel === 0 then for i = 0 to 15: out[i] = a[i] else for i = 0 to 15: out[i] = b[i]
 */
export const createMux16Gate = (
  inputs1: HTMLInputElement[],
  inputs2: HTMLInputElement[],
  select: HTMLInputElement,
  label?: string
) => {
  return inputs1.map((input, idx) =>
    createMuxGate(input, inputs2[idx], select, `${label}-${idx}`)
  );
};
