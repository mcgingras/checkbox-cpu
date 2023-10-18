export const addCheckboxWithLabel = (label: string) => {
  const input = document.createElement("input");
  input.type = "checkbox";
  document.body.appendChild(input);
  document.body.appendChild(document.createTextNode(label));
  document.body.appendChild(document.createElement("br"));
  return input;
};
