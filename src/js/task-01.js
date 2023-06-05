"use strict";

var elements = document.querySelectorAll("#categories>.item");
console.log(`Number of categories: ${elements.length}`);

elements.forEach(function (element) {
    console.log(`Category: ${element.querySelector("h2").innerText}`);
    console.log(`Elements: ${element.querySelectorAll("ul>li").length}`);
});
