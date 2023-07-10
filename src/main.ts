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
import { createALU } from "./modules/alu/alu";

const addInputWithLabel = (label: string) => {
  const input = document.createElement("input");
  input.type = "checkbox";
  document.body.appendChild(input);
  document.body.appendChild(document.createTextNode(label));
  document.body.appendChild(document.createElement("br"));
  return input;
};

const initALU = () => {
  const zx = addInputWithLabel("zx");
  const nx = addInputWithLabel("nx");
  const zy = addInputWithLabel("zy");
  const ny = addInputWithLabel("ny");
  const f = addInputWithLabel("f");
  const no = addInputWithLabel("no");

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

  for (let i = 0; i < 16; i++) {
    const input = document.createElement("input");
    input.type = "checkbox";
    inputs2.push(input);
    document.body.appendChild(input);
    document.body.appendChild(document.createTextNode("Input " + i));
    document.body.appendChild(document.createElement("br"));
  }

  createALU(inputs1, inputs2, zx, nx, zy, ny, f, no);
};
initALU();

const initNandGate = () => {
  const input1 = addInputWithLabel("Input 1");
  const input2 = addInputWithLabel("Input 2");
  createNandGate(input1, input2, "Nand");
};
// initNandGate();

const initAndGate = () => {
  const input1 = addInputWithLabel("Input 1");
  const input2 = addInputWithLabel("Input 2");
  createAndGate(input1, input2, "And");
};
// initAndGate();
