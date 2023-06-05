"use strict";

document
    .querySelector("input#name-input")
    .addEventListener("input", (event) => {
        document.querySelector("#name-output").textContent =
            event.currentTarget.value;
        if (document.querySelector("#name-output").textContent == "") {
            document.querySelector("#name-output").textContent = "Anonymous";
        }
    });
