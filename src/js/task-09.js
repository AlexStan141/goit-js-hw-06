"use strict";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", () => {
    var randomColor = getRandomHexColor();
    const body = document.querySelector("body");
    const span = document.querySelector(".color");
    body.style.backgroundColor = randomColor;
    span.innerHTML = randomColor;
});
