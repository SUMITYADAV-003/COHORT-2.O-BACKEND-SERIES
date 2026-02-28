// Select elements
const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".btn-number");
const operatorButtons = document.querySelectorAll(".btn-operator");
const equalButton = document.querySelector(".btn-equal");
const clearButton = document.querySelector(".btn-clear");

// Calculator state
let currentInput = "";
let operator = "";
let previousInput = "";

// Update display
function updateDisplay(value) {
    display.textContent = value;
}

// Handle number click
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        currentInput += button.textContent;
        updateDisplay(currentInput);
    });
});

// Handle operator click
operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        if (currentInput === "") return;

        if (previousInput !== "") {
            calculate();
        }

        operator = button.textContent;
        previousInput = currentInput;
        currentInput = "";
    });
});

// Handle equal click
equalButton.addEventListener("click", () => {
    if (currentInput === "" || previousInput === "") return;
    calculate();
    operator = "";
});

// Handle clear click
clearButton.addEventListener("click", () => {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay("0");
});

// Calculation logic
function calculate() {
    let result;

    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (operator) {
        case "+":
            result = prev + current;
            break;
        case "-":
            result = prev - current;
            break;
        case "*":
            result = prev * current;
            break;
        case "/":
            result = current !== 0 ? prev / current : "Error";
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    updateDisplay(currentInput);
}