// globals variables

let globalStorageValue1 = '';
let globalStorageValue2 = '';
let globalOperatorStorage;
let globalOperatorPressed = false;
let globalEqualPressed = false;

// function sum

const sum = (a,b) => a + b;

// function subtract 

const subtract = (a,b) => a - b;

// function multiply

const multiply = (a,b) => a * b;

// function divide

const divide = (a,b) => a / b;

// function exponentiation

const square = (a) => a * a;

// function square root

const squareRoot = (a) => Math.sqrt(a);

// function percentage

const percentage = (a) => a / 100;


// AddEventListener function who detect if a button is pressed

const buttonListener = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) =>
        button.addEventListener('click', () => {
            let pressedButton = button.innerHTML;
            returnFunction(pressedButton);
            equalPressed(pressedButton)
            console.log('globalValueStorage1 = ' + typeof globalStorageValue1)
            console.log('globalValueStorage2 = ' + typeof globalStorageValue2)
            console.log('globalOperatorStorage = ' + typeof globalOperatorStorage)

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

const operate = (operator, a, b = null) => {
    if (operator ==='+') {
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
        console.log('a = ' + a)
        console.log('square selected')
        console.log('b = ' + b)
        return square(a);
    }
    if (operator === '√') {
        return squareRoot(b);
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

// Function who detect if operator has been pressed and save the value in desired global variable

const returnFunction = (valueToDetect) => {

    if (numberDetector(valueToDetect) && globalOperatorPressed == false) {
        globalStorageValue1 =  globalStorageValue1.concat(valueToDetect);
        displayWindow(globalStorageValue1);
    }
    if (operatorDetector(valueToDetect)) {
        globalOperatorStorage = valueToDetect;
        displayWindow(globalOperatorStorage);
        globalOperatorPressed = true;
    }
    if (numberDetector(valueToDetect) && globalOperatorPressed == true) {
        globalStorageValue2 = globalStorageValue2.concat(valueToDetect);
        displayWindow(globalStorageValue2);
    }
}

// Function who detect if equal has been pressed & change global variable + 
// display operate function result

const equalPressed = (valueToDetect) => {
    if (valueToDetect === '='){
        globalEqualPressed = true;
        globalOperatorPressed = false;
        displayWindow(operate(globalOperatorStorage, parseInt(globalStorageValue1), parseInt (globalStorageValue2)))
        globalStorageValue1 = '';
        globalStorageValue2 = '';
    }
}

let x = ''
console.log(x)
x = x.concat('BDdazeazdazzdad')
console.log(x)

buttonListener();


