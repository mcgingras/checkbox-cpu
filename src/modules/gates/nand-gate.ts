import { addCheckboxWithLabel } from "../utils/addCheckboxWithLabel";

const ENABLE_LABELS = false;
/**
 * @param input1
 * @param input2
 * @param append
 * @param label
 * @returns output
 *
 * Two bit NAND
 * spec:
 * 1 | 2 | out
 * -----------
 * 0 | 0 | 1
 * 0 | 1 | 1
 * 1 | 0 | 1
 * 1 | 1 | 0
 */
export const createNandGate = (
  input1: HTMLInputElement,
  input2: HTMLInputElement,
  label?: string,
  isMainOutput = false
) => {
  var container = document.createElement("div");
  input1.addEventListener("change", updateOutput);
  input2.addEventListener("change", updateOutput);

  var output = document.createElement("input");
  output.type = "checkbox";
  output.disabled = true;

  if ((ENABLE_LABELS && label) || isMainOutput) {
    const app = document.getElementById("app") as HTMLDivElement;
    const renderTarget = app ?? document.body;
    container.appendChild(output);
    container.appendChild(document.createTextNode(label || ""));
    renderTarget.appendChild(container);
  }

  updateOutput();
  return output;

  function updateOutput() {
    const prevState = output.checked;
    const newState = !(input1.checked && input2.checked);

    if (prevState !== newState) {
      output.checked = newState;
      let event = new Event("change", { bubbles: false, cancelable: false });
      output.dispatchEvent(event);
    }
  }
};

export const initNandGate = () => {
  const input1 = addCheckboxWithLabel("Input 1");
  const input2 = addCheckboxWithLabel("Input 2");
  createNandGate(input1, input2, "Output", true);
};
