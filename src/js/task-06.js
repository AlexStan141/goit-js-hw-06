"use strict";

var input = document.querySelector("#validation-input");

input.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length != input.getAttribute("data-length")) {
        if (input.classList.contains("valid")) {
            input.classList.remove("valid");
        }
        input.classList.add("invalid");
    } else {
        if (input.classList.contains("invalid")) {
            input.classList.remove("invalid");
        }
        input.classList.add("valid");
    }
});
