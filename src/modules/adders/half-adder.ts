import { createAndGate } from "../gates/and-gate.js";

export const createHalfAdder = () => {
  var container = document.createElement("div");

  var inputA = document.createElement("input");
  inputA.type = "checkbox";

  var inputB = document.createElement("input");
  inputB.type = "checkbox";

  var outputSum = document.createElement("input");
  outputSum.type = "checkbox";
  outputSum.disabled = true;

  var outputCarry = document.createElement("input");
  outputCarry.type = "checkbox";
  outputCarry.disabled = true;

  // Create the AND gate components
  var andGate1 = createAndGate();
  var andGate2 = createAndGate();

  // Connect the inputs and gates
  inputA.addEventListener("change", updateOutputs);
  inputB.addEventListener("change", updateOutputs);
  andGate1[0].addEventListener("change", updateOutputs);
  andGate2[0].addEventListener("change", updateOutputs);

  container.appendChild(inputA);
  container.appendChild(document.createTextNode("Input A"));
  container.appendChild(document.createElement("br"));
  container.appendChild(inputB);
  container.appendChild(document.createTextNode("Input B"));
  container.appendChild(document.createElement("br"));
  container.appendChild(outputSum);
  container.appendChild(document.createTextNode("Sum"));
  container.appendChild(document.createElement("br"));
  container.appendChild(outputCarry);
  container.appendChild(document.createTextNode("Carry"));

  document.body.appendChild(container);

  function updateOutputs() {
    var inputAValue = inputA.checked;
    var inputBValue = inputB.checked;

    andGate1[0].checked = inputAValue;
    andGate1[1].checked = inputBValue;

    andGate2[0].checked = inputAValue;
    andGate2[1].checked = inputBValue;

    outputSum.checked = inputAValue !== inputBValue;
    outputCarry.checked = andGate1[1].checked || andGate2[1].checked;
  }

  return [outputSum, outputCarry];
};
