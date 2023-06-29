import { createOrGate } from "./or-gate";

/**
 * @param inputs1 - array of inputs
 * @param inputs2 - array of inputs
 * @param label - string
 * @returns output as HTMLInputElement[]
 *
 * 16 bit OR
 * if a === 1 or b === 1 then out = 1, else out = 0
 */
export const createOr16Gate = (
  inputs1: HTMLInputElement[],
  inputs2: HTMLInputElement[],
  label?: string
) => {
  return inputs1.map((input, idx) =>
    createOrGate(input, inputs2[idx], `${label}-${idx}`)
  );
};
