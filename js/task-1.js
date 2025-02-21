const categories = document.querySelector("#categories");
const totalChild = categories.children;
const totalCategories = totalChild.length;

const firstEl = totalChild[0];

const textEL = document.querySelectorAll("h2");

console.log(`Number of categories:`, totalCategories);
console.log(firstEl);
console.log(textEL);
