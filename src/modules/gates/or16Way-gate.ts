import { createOrGate } from "./or-gate";
import { createOr8WayGate } from "./or8Way-gate";

/**
 * @param inputs - array of inputs
 * @param label - string
 * @returns output as HTMLInputElement
 *
 * 16 way Or
 * outputs 1 if any of the inputs are 1 else 0
 */
export const createOr16WayGate = (
  inputs: HTMLInputElement[],
  label?: string
) => {
  const fh = createOr8WayGate(inputs.slice(0, 8));
  const sh = createOr8WayGate(inputs.slice(8, 16));
  return createOrGate(fh, sh, label);
};
