import { createHalfAdder } from "./modules/adders/half-adder";
import { createAndGate } from "./modules/gates/and-gate";
import { createNotGate } from "./modules/gates/not-gate";
import { createNandGate } from "./modules/gates/nand-gate";
import { createOrGate } from "./modules/gates/or-gate";

// createHalfAdder();
const input1 = document.createElement("input");
const input2 = document.createElement("input");

document.body.appendChild(input1);
document.body.appendChild(document.createTextNode("Input A"));
document.body.appendChild(document.createElement("br"));

document.body.appendChild(input2);
document.body.appendChild(document.createTextNode("Input B"));
document.body.appendChild(document.createElement("br"));

createOrGate(input1, input2, "Output");
