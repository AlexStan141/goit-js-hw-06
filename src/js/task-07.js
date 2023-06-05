"use strict";

document
    .querySelector("#font-size-control")
    .addEventListener("input", (event) => {
        document.querySelector(
            "span#text"
        ).style.fontSize = `${event.currentTarget.value}px`;
    });
