
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


// AddEventListener function who return button.className
const buttonListener = () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        return button.className;
        })
    });
    }

buttonListener();

// function who display value in the window div

const displayWindow = (valueToDisplay) => {
    const screen = document.querySelector('.window');
    screen.textContent = valueToDisplay;
}

displayWindow('test');