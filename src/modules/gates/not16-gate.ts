import { createNotGate } from "./not-gate";

/**
 * @param inputs - array of inputs
 * @param label - string
 * @returns output as HTMLInputElement[]
 *
 * 16 bit NOT
 * for i = 0 to 15: out[i] = not(in[i])
 */
export const createNot16Gate = (inputs: HTMLInputElement[], label?: string) => {
  return inputs.map((input, idx) => createNotGate(input, `${label}-${idx}`));
};
