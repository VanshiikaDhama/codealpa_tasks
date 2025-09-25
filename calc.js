
let inputBox = document.querySelector("input");

// Append value to input
function append(value) {
    inputBox.value += value;
}

// Clear the input box
function clearDisplay() {
    inputBox.value = "";
}

// Calculate the result
function calculate() {
    try {
        inputBox.value = eval(inputBox.value);
    } catch (error) {
        inputBox.value = "Error";
    }
}
