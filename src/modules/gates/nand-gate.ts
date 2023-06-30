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
  label?: string
) => {
  var container = document.createElement("div");

  input1.type = "checkbox";
  input1.addEventListener("change", updateOutput);

  input2.type = "checkbox";
  input2.addEventListener("change", updateOutput);

  var output = document.createElement("input");
  output.type = "checkbox";
  output.disabled = true;

  if (label) {
    container.appendChild(output);
    container.appendChild(document.createTextNode(label || ""));
    document.body.appendChild(container);
  }

  updateOutput();
  return output;

  function updateOutput() {
    output.checked = !(input1.checked && input2.checked);
    let event = new Event("change", { bubbles: true, cancelable: false });
    output.dispatchEvent(event);
  }
};
