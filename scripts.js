const container = document.querySelector("#container");
const sliderSelector = document.getElementById("sizeSelector");
let pixel;
let value = document.getElementById("value");
   value.innerHTML = sliderSelector.value;

function createPixelRow (row) {
    for (let column = 0; column < row; column++) {
        pixel = document.createElement('div');
        pixel.classList = 'pixel';
        container.appendChild(pixel);
    }
}

function createPixelColumn(column) {
    container.style.setProperty('--gridCount', column);

    for (let row = 0; row < column; row++) {
        createPixelRow(column)
    }
}

// function userPrompt() {
//     let userValue = prompt("Choose grid size between 1 and 55:");

//     if (userValue < 1 || userValue > 55) {
//         return userPrompt()
//     }
//     createPixelColumn(userValue);
// }

function changeColor(pixel) {
    pixel.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (element) {
    pixel = element.target;

    if (pixel.matches("div.pixel")) {
        changeColor(pixel);
    }
});

sliderSelector.oninput = function() {
    value.innerHTML = this.value;
    createPixelColumn(value.innerHTML);
}

// userPrompt();