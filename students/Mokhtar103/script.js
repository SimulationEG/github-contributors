const display = document.getElementById("display");

let currentValue = "";
let previousValue = "";
let operator = null;
let shouldResetDisplay = false;


function updateDisplay() {
    display.textContent = currentValue || "0";
}


function appendNumber(number) {

    if (shouldResetDisplay) {
        currentValue = "";
        shouldResetDisplay = false;
    }

    if (number === "." && currentValue.includes(".")) {
        return;
    }

    currentValue += number;

    updateDisplay();
}


function chooseOperator(selectedOperator) {

    if (currentValue === "") {
        return;
    }

    if (previousValue !== "") {
        calculate();
    }

    previousValue = currentValue;
    operator = selectedOperator;
    shouldResetDisplay = true;
}


function calculate() {

    if (
        previousValue === "" ||
        currentValue === "" ||
        operator === null
    ) {
        return;
    }

    const firstNumber = parseFloat(previousValue);
    const secondNumber = parseFloat(currentValue);

    let result;

    switch (operator) {

        case "+":
            result = firstNumber + secondNumber;
            break;

        case "-":
            result = firstNumber - secondNumber;
            break;

        case "*":
            result = firstNumber * secondNumber;
            break;

        case "/":

            if (secondNumber === 0) {
                display.textContent = "Cannot divide by 0";
                resetCalculator();
                return;
            }

            result = firstNumber / secondNumber;
            break;
    }

    currentValue = result.toString();

    previousValue = "";
    operator = null;
    shouldResetDisplay = true;

    updateDisplay();
}


function clearCalculator() {
    currentValue = "";
    previousValue = "";
    operator = null;
    shouldResetDisplay = false;

    updateDisplay();
}


function deleteNumber() {

    if (shouldResetDisplay) {
        return;
    }

    currentValue = currentValue.slice(0, -1);

    updateDisplay();
}


function resetCalculator() {
    previousValue = "";
    operator = null;
    shouldResetDisplay = true;
}



document.querySelectorAll("[data-number]").forEach(button => {

    button.addEventListener("click", () => {

        appendNumber(button.dataset.number);

    });

});



document.querySelectorAll("[data-operator]").forEach(button => {

    button.addEventListener("click", () => {

        chooseOperator(button.dataset.operator);

    });

});



document.querySelector("[data-action='clear']")
    .addEventListener("click", clearCalculator);


document.querySelector("[data-action='delete']")
    .addEventListener("click", deleteNumber);


document.querySelector("[data-action='calculate']")
    .addEventListener("click", calculate);