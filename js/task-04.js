function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const initSize = 30;

function createBox(amonnt) {
  let boxes = document.querySelector("#boxes");
  for (var i = amonnt; i > 0; i--) {
    boxes.insertAdjacentHTML(
      "afterbegin",
      `<div style="background-color:${getRandomHexColor()};height: ${
        initSize * i
      }px; width: ${initSize * i}px"/> `
    );
  }
}
// tworzy nowe boxy

function deleteBox() {
  let boxes = document.querySelector("#boxes");

  while (boxes.children.length != 0) {
    boxes.children[0].remove();
  }
}
// usuwa stworzone boxy

const input = document.querySelector("#controls").children[0];
const createButton = document.querySelector("#controls").children[1];
const deleteButton = document.querySelector("#controls").children[2];

const createButtonClick = (event) => {
  if (input.value != "") createBox(input.value);
};

const deleteButtonClick = (event) => {
  deleteBox();
};

createButton.addEventListener("click", createButtonClick);
deleteButton.addEventListener("click", deleteButtonClick);
