import { createHalfAdder } from "./half-adder";
import { createFullAdder } from "./full-adder";

/**
 * @param input1
 * @param input2
 * @returns sum
 *
 * 16 Bit Adder
 * Adds two 16-bit values.
 */

export const create16BitAdder = (
  inputs1: HTMLInputElement[],
  inputs2: HTMLInputElement[]
) => {
  const [o1, c1] = createHalfAdder(inputs1[0], inputs2[0]);
  const [o2, c2] = createFullAdder(inputs1[1], inputs2[1], c1);
  const [o3, c3] = createFullAdder(inputs1[2], inputs2[2], c2);
  const [o4, c4] = createFullAdder(inputs1[3], inputs2[3], c3);
  const [o5, c5] = createFullAdder(inputs1[4], inputs2[4], c4);
  const [o6, c6] = createFullAdder(inputs1[5], inputs2[5], c5);
  const [o7, c7] = createFullAdder(inputs1[6], inputs2[6], c6);
  const [o8, c8] = createFullAdder(inputs1[7], inputs2[7], c7);
  const [o9, c9] = createFullAdder(inputs1[8], inputs2[8], c8);
  const [o10, c10] = createFullAdder(inputs1[9], inputs2[9], c9);
  const [o11, c11] = createFullAdder(inputs1[10], inputs2[10], c10);
  const [o12, c12] = createFullAdder(inputs1[11], inputs2[11], c11);
  const [o13, c13] = createFullAdder(inputs1[12], inputs2[12], c12);
  const [o14, c14] = createFullAdder(inputs1[13], inputs2[13], c13);
  const [o15, c15] = createFullAdder(inputs1[14], inputs2[14], c14);
  const [o16, c16] = createFullAdder(inputs1[15], inputs2[15], c15);

  return [
    o1,
    o2,
    o3,
    o4,
    o5,
    o6,
    o7,
    o8,
    o9,
    o10,
    o11,
    o12,
    o13,
    o14,
    o15,
    o16,
    c16,
  ];
};
