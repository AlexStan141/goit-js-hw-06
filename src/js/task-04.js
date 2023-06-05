'use strict'

var initialValue = parseInt(document.querySelector("#value").innerHTML);

function handleIncrement() {
    initialValue += 1;
    document.querySelector("#value").innerHTML = initialValue;
}

function handleDecrement() {
    initialValue -= 1;
    document.querySelector("#value").innerHTML = initialValue;
}

document.querySelector('button[data-action="increment"]').addEventListener("click", handleIncrement);
document.querySelector('button[data-action="decrement"]').addEventListener("click", handleDecrement);


