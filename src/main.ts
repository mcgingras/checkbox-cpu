import { createAndGate } from "./modules/gates/and-gate";
import { createNotGate } from "./modules/gates/not-gate";
import { createNandGate } from "./modules/gates/nand-gate";
import { createOrGate } from "./modules/gates/or-gate";
import { createNot16Gate } from "./modules/gates/not16-gate";
import { createAnd16Gate } from "./modules/gates/and16-gate";
import { createMuxGate } from "./modules/gates/mux-gate";
import { createMux16Gate } from "./modules/gates/mux16-gate";
import { createHalfAdder } from "./modules/adders/half-adder";
import { createFullAdder } from "./modules/adders/full-adder";
import { createInc16 } from "./modules/adders/inc-16";

const selector = document.createElement("input");
selector.type = "checkbox";
document.body.appendChild(selector);
document.body.appendChild(document.createTextNode("Selector"));
document.body.appendChild(document.createElement("br"));

const inputs1 = [] as HTMLInputElement[];
const inputs2 = [] as HTMLInputElement[];

for (let i = 0; i < 16; i++) {
  const input = document.createElement("input");
  input.type = "checkbox";
  inputs1.push(input);
  document.body.appendChild(input);
  document.body.appendChild(document.createTextNode("Input " + i));
  document.body.appendChild(document.createElement("br"));
}

// for (let i = 0; i < 16; i++) {
//   const input = document.createElement("input");
//   input.type = "checkbox";
//   inputs2.push(input);
//   document.body.appendChild(input);
//   document.body.appendChild(document.createTextNode("Input " + i));
//   document.body.appendChild(document.createElement("br"));
// }

createInc16(inputs1);
