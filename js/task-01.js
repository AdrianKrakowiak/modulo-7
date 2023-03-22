let categories = document
  .getElementById("categories")
  .getElementsByClassName("item");
let categoriesLength = categories.length;
console.log(`Number of categories :  ${categoriesLength}`);
for (var i = 0; i < categoriesLength; i++) {
  let categoryName = categories[i].children[0];
  let elements = categories[i].children[1].children;
  console.log(`Category :  ${categoryName.innerText}`);
  console.log(`Elements :  ${elements.length}`);
}
