"use strict";

const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

var htmlForUl = "";

ingredients.forEach(function (ingredient) {
    var createdLi = document.createElement("li");
    createdLi.innerHTML = `${ingredient}`;
    createdLi.classList.add("item");
    htmlForUl += `<li> ${createdLi.innerHTML} </li>`;
});

document.querySelector("#ingredients").innerHTML = htmlForUl;
