function createDom() {
  const root = document.getElementById("root");

  let container = document.createElement("div");
  container.id = "container";

  let mainText = document.createElement("div");
  mainText.id = "mainText";
  mainText.type = "text";
  mainText.innerHTML = "Visszajelzés";

  let input1 = document.createElement("input");
  input1.id = "input1";
  input1.className = "inputForm";
  input1.type = "text";
  input1.placeholder = "Tárgy";

  let input2 = document.createElement("input");
  input2.id = "input2";
  input2.className = "inputForm";
  input2.type = "text";
  input2.placeholder = "Megjegyzés";

  let checkContainer = document.createElement("div");
  checkContainer.id = "checkContainer";

  let checkBox = document.createElement("input");
  checkBox.id = "checkBox";
  checkBox.className = "checkBoxClass";
  checkBox.type = "checkBox";

  let checkBoxText = document.createElement("div");
  checkBoxText.id = "checkBoxText";
  checkBoxText.type = "text";
  checkBoxText.innerText =
    "Elolvastam és elfogadom az Adatkezelési Tájékoztatóz.";

  let button = document.createElement("button");
  button.id = "button";
  button.type = "submit";
  button.innerHTML = "Mentés";

  root.append(container);
  container.append(mainText, input1, input2, checkContainer, button);
  checkContainer.append(checkBox, checkBoxText);
}

function main() {
  createDom();
}

window.addEventListener("load", main);
