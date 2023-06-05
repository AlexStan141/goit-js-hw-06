"use strict";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

document.querySelector("button.change-color").addEventListener("click", () => {
    var randomColor = getRandomHexColor();
    document.querySelector("body").style.color = randomColor;
    document.querySelector(".color").innerHTML = randomColor;
});
