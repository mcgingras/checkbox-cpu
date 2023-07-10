import { create16BitAdder } from "./add-16";

/**
 * @param inputs
 * @returns sum
 *
 * 16 Bit Increment
 * adds 1 to a 16-bit value.
 */

export const createInc16 = (inputs: HTMLInputElement[]) => {
  const bin1 = [];
  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    input.disabled = true;
    bin1.push(input);
    document.body.appendChild(input);
    document.body.appendChild(document.createElement("br"));
  }

  bin1[0].checked = true;

  return create16BitAdder(inputs, bin1);
};
