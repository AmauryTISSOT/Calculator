// globals variables

let globalStorageValue1;
let globalStorageValue2;
let globalOperatorStorage;
let operatorPressed = false;
let equalPressed = false;

// function sum

const sum = (a,b) => a + b;

// function subtract 

const subtract = (a,b) => a - b;

// function multiply

const multiply = (a,b) => a * b;

// function divide

const divide = (a,b) => a / b;

// function exponentiation

const exponentiation = (a,b) => a ** b;

// function square root

const squareRoot = (a) => Math.sqrt(a);

// function percentage

const percentage = (a) => a / 100;


// AddEventListener function who detect if a button is pressed

const buttonListener = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>
        button.addEventListener('click', () => {
            let pressedButton = button.innerHTML
            returnFunction(pressedButton) ;
            console.log('globalValueStorage1 = ' + globalStorageValue1)
            console.log('globalValueStorage2 = ' + globalStorageValue2)
            console.log('globalOperatorStorage = ' + globalOperatorStorage)

        }
        ) 
    );
}


// function who display value in the window div

const displayWindow = (valueToDisplay) => {
    if (valueToDisplay !== undefined) {
    const screen = document.querySelector('.window');
    screen.textContent = valueToDisplay;
    }
}

// function who execute the right calculation function when given and operator value

const operate = (operator, a, b) => {
    if (operator ==='+') {
        console.log('sum selected')
        return sum(a,b);
    }
    if (operator ==='-') {
        return subtract(a,b);
    }
    if (operator ==='x') {
        return multiply(a,b);
    }
    if (operator === '÷') {
        return divide(a,b);
    }
    if (operator ==='x²') {
        return exponentiation(a,b);
    }
    if (operator === '√') {
        return squareRoot(a);
    }
    if (operator === '%') {
        return percentage(a);
    }
}

// Function who detect if an operator is pressed

const operatorDetector = (buttonPressed) => {
    if (buttonPressed === '+' || buttonPressed ==='-' || buttonPressed === 'x'||
    buttonPressed === '÷'|| buttonPressed === 'x²'||buttonPressed ==='√' || buttonPressed ==='%') {
    return true;
    }
}

// Function who detect if a number is pressed

const numberDetector = (valueToDetect) => {
    if (Number.isInteger(parseInt(valueToDetect))) {
        return true;
    }
}

// Function who detect if operator has been pressed and return a second value to store

const value2storage = (valueToDetect, valueToStore) => {
    if (valueToDetect !== undefined) {
    console.log('OK');
    return valueToStore;
    }
}

const returnFunction = (valueToDetect) => {

    if (numberDetector(valueToDetect) && operatorPressed == false) {
        displayWindow(valueToDetect);
        globalStorageValue1 = valueToDetect;
    }
    if (operatorDetector(valueToDetect)) {
        globalOperatorStorage = valueToDetect;
        operatorPressed = true;
    }
    if (numberDetector(valueToDetect) && operatorPressed == true) {
        displayWindow(valueToDetect);
        globalStorageValue2 = valueToDetect;
    }
}

buttonListener();


