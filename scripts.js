const container = document.querySelector("#container");
const sliderSelector = document.getElementById("sizeSelector");
let pixel;
let value = document.getElementById("value");
   value.innerHTML = sliderSelector.value;

function createPixel (pixelAmount) {
    for (let column = 0; column < pixelAmount; column++) {
        pixel = document.createElement('div');
        pixel.classList = 'pixel';
        container.appendChild(pixel);
    }
}

function canvasSize(gridSize) {
    container.style.setProperty('--gridCount', gridSize);

    for (let row = 0; row < gridSize; row++) {
        createPixel(gridSize)
    }
}

function userPrompt() {
    let value = prompt("Choose grid size between 1 and 55:");

    if (value < 5 || value > 55) {
        return userPrompt()
    }
    canvasSize(value);
}

sliderSelector.oninput = function() {
    value.innerHTML = this.value;
}

function changeColor (target) {
    target.style.backgroundColor = 'black';
}

container.addEventListener("mouseover", function (e) {
    target = e.target;

    if (target.matches("div.pixel")) {
        changeColor(target);
    }
});

userPrompt();