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

let displayValue;

let firstNumber = 0;

let secondNumber = 0;

let operator;

let operatorPressed = false;

function populateDisplay(number){
    displayValue = number;
    DISPLAYED_VALUE.textContent=number;
}

BUTTON_ZERO.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 0;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 0;
    }});

BUTTON_ONE.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 1;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 1;
    }});

BUTTON_TWO.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 2;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 2;
    }});

BUTTON_THREE.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 3;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 3;
    }});

BUTTON_FOUR.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 4;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 4;
    }});

BUTTON_FIVE.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 5;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 5;
    }});

BUTTON_SIX.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 6;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 6;
    }});

BUTTON_SEVEN.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 7;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 7;
    }});

BUTTON_EIGHT.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 8;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 8;
    }});

BUTTON_NINE.addEventListener("click", () => {
    if (operatorPressed == false){
        firstNumber = 9;
    populateDisplay(firstNumber)}
    else{
        secondNumber = 9;
    }});


BUTTON_ADD.addEventListener("click", () => {operator = "+"; 
operatorPressed = true;});

BUTTON_SUBTRACT.addEventListener("click", () => {operator = "-"; 
operatorPressed = true;});

BUTTON_MULTIPLY.addEventListener("click", () => {operator = "*"; 
operatorPressed = true;});

BUTTON_DIVIDE.addEventListener("click", () => {operator = "/"; 
operatorPressed = true;});

BUTTON_EQUALS.addEventListener("click", () => {
    populateDisplay(operate(operator, firstNumber, secondNumber));
    operatorPressed = false;
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
    return a / b;
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
