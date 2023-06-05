"use strict";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    var initialDimensions = 30;
    var color = getRandomHexColor();
    for (let i = 1; i <= amount; i++) {
        var box = document.createElement("div");
        box.style.width = `${initialDimensions}px`;
        box.style.height = `${initialDimensions}px`;
        box.style.backgroundColor = color;
        document.querySelector("#boxes").append(box);
        initialDimensions += 10;
    }
}

document.querySelector("button[data-create]").addEventListener("click", () => {
    document.querySelector("#boxes").innerHTML = "";
    var amount = document.querySelector("input[type='number']").value;
    console.log(amount);
    createBoxes(amount);
});

document.querySelector("button[data-destroy]").addEventListener("click", () => {
    document.querySelector("#boxes").innerHTML = "";
});
