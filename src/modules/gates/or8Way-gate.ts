import { createOrGate } from "./or-gate";

/**
 * @param inputs - array of inputs
 * @param label - string
 * @returns output as HTMLInputElement
 *
 * 8 way Or
 * outputs 1 if any of the inputs are 1 else 0
 */
export const createOr8WayGate = (
  inputs: HTMLInputElement[],
  label?: string
) => {
  const a = createOrGate(inputs[0], inputs[1]);
  const b = createOrGate(a, inputs[2]);
  const c = createOrGate(b, inputs[3]);
  const d = createOrGate(c, inputs[4]);
  const e = createOrGate(d, inputs[5]);
  const f = createOrGate(e, inputs[6]);
  return createOrGate(f, inputs[7], label);
};
