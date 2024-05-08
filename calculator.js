const BUTTON_ZERO = document.getElementById("button-00");
const BUTTON_ONE = document.getElementById("button-01");
const BUTTON_TWO = document.getElementById("button-02");
const BUTTON_THREE = document.getElementById("button-03");
const BUTTON_FOUR = document.getElementById("button-04");
const BUTTON_FIVE = document.getElementById("button-05");
const BUTTON_SIX = document.getElementById("button-06");
const BUTTON_SEVEN = document.getElementById("button-07");
const BUTTON_EIGHT = document.getElementById("button-08");
const BUTTON_NINE = document.getElementById("button-09");

const BUTTON_ADD = document.getElementById("button-add");
const BUTTON_SUBTRACT = document.getElementById("button-subtract");
const BUTTON_MULTIPLY = document.getElementById("button-multiply");
const BUTTON_DIVIDE = document.getElementById("button-divide");

const BUTTON_EQUALS = document.getElementById("button-equals");

const BUTTON_CLEAR = document.getElementById("button-clear");

const DISPLAYED_VALUE = document.getElementById("result");

let firstNumber = 0;

let secondNumber = 0;

let operator = "+";

let operatorPressed = false;

function populateDisplay(number){
    DISPLAYED_VALUE.textContent=number.toFixed(2);
}

function updateNumbers(inputNumber){
    if (operatorPressed == false){
        firstNumber = Number(`${firstNumber}` +`${inputNumber}`);
        populateDisplay(firstNumber);
    }
    else{
        secondNumber = Number(`${secondNumber}` +`${inputNumber}`);
        populateDisplay(secondNumber);
    }
}

BUTTON_ZERO.addEventListener("click", () => {
    updateNumbers(0);
});

BUTTON_ONE.addEventListener("click", () => {
    updateNumbers(1);
});

BUTTON_TWO.addEventListener("click", () => {
    updateNumbers(2);
});

BUTTON_THREE.addEventListener("click", () => {
    updateNumbers(3);
});

BUTTON_FOUR.addEventListener("click", () => {
    updateNumbers(4);
});

BUTTON_FIVE.addEventListener("click", () => {
    updateNumbers(5);
    });

BUTTON_SIX.addEventListener("click", () => {
    updateNumbers(6);
    });

BUTTON_SEVEN.addEventListener("click", () => {
    updateNumbers(7);
    });

BUTTON_EIGHT.addEventListener("click", () => {
    updateNumbers(8);
    });

BUTTON_NINE.addEventListener("click", () => {
    updateNumbers(9);
    });


BUTTON_ADD.addEventListener("click", () => {
    if (operatorPressed==false){
        operatorPressed = true;
    }
    else{
        firstNumber = operate(operator, firstNumber, secondNumber);
        populateDisplay(firstNumber);
        secondNumber = 0;
    }
    operator = "+";
});

BUTTON_SUBTRACT.addEventListener("click", () => {
    if (operatorPressed==false){
        operatorPressed = true;
    }
    else{
        firstNumber = operate(operator, firstNumber, secondNumber);
        populateDisplay(firstNumber);
        secondNumber = 0;
    }
    operator = "-"; 
});

BUTTON_MULTIPLY.addEventListener("click", () => {
    if (operatorPressed==false){
        operatorPressed = true;
    }
    else{
        firstNumber = operate(operator, firstNumber, secondNumber);
        populateDisplay(firstNumber);
        secondNumber = 0;
    }
    operator = "*";
});

BUTTON_DIVIDE.addEventListener("click", () => {
    if (operatorPressed==false){
        operatorPressed = true;
    }
    else{
        firstNumber = operate(operator, firstNumber, secondNumber);
        populateDisplay(firstNumber);
        secondNumber = 0;
    }
    operator = "/"; 
});

BUTTON_EQUALS.addEventListener("click", () => {
    firstNumber = operate(operator, firstNumber, secondNumber);
    populateDisplay(firstNumber);
    secondNumber = 0;
});

BUTTON_CLEAR.addEventListener("click", () => {
operatorPressed = false;
firstNumber = 0;
secondNumber = 0;
populateDisplay(0);
});

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    if (b !== 0){
    return a / b;
    }

    else{
        alert("Cannot divide by ZERO!");
        return a;
    }
}

function operate(operator, firstNumber, secondNumber){
    switch (operator){
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}
