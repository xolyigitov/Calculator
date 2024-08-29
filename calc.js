const calculatorScreen = document.getElementById('calculator-screen');
let firstValue = '';
let operator = '';
let secondValue = '';

document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', () => {
        const action = key.dataset.action;

        if (!isNaN(action)) {
            handleNumber(action);
        } else if (action === 'decimal') {
            handleDecimal();
        } else if (action === 'clear') {
            clearCalculator();
        } else if (action === 'calculate') {
            calculateResult();
        } else {
            handleOperator(action);
        }
        updateScreen();
    });
});

function handleNumber(number) {
    if (operator === '') {
        firstValue += number;
    } else {
        secondValue += number;
    }
}

function handleDecimal() {
    if (operator === '') {
        if (!firstValue.includes('.')) {
            firstValue += '.';
        }
    } else {
        if (!secondValue.includes('.')) {
            secondValue += '.';
        }
    }
}

function handleOperator(op) {
    if (firstValue !== '') {
        operator = op;
    }
}

function clearCalculator() {
    firstValue = '';
    operator = '';
    secondValue = '';
}

function calculateResult() {
    let result = '';

    if (firstValue !== '' && secondValue !== '') {
        const num1 = parseFloat(firstValue);
        const num2 = parseFloat(secondValue);

        switch (operator) {
            case 'add':
                result = num1 + num2;
                break;
            case 'subtract':
                result = num1 - num2;
                break;
            case 'multiply':
                result = num1 * num2;
                break;
            case 'divide':
                result = num1 / num2;
                break;
        }

        firstValue = result.toString();
        operator = '';
        secondValue = '';
    }
}

function updateScreen() {
    calculatorScreen.value = firstValue + (operator ? ' ' + operator + ' ' : '') + secondValue;
}
