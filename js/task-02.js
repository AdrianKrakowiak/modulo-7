const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

let list = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  let liElement = document.createElement("li");
  liElement.textContent = item;
  list.append(liElement);
});
