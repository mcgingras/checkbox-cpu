export const addCheckboxWithLabel = (label: string) => {
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = false;

  const app = document.getElementById("app") as HTMLDivElement;
  const renderTarget = app ?? document.body;

  renderTarget.appendChild(input);
  renderTarget.appendChild(document.createTextNode(label));
  renderTarget.appendChild(document.createElement("br"));

  return input;
};
