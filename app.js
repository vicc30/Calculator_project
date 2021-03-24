// class constructor for calculator adding numbers and operations

class Calculator {
    constructor(previousText, currentText) {
        this.previousText = previousText;
        this.currentText = currentText;
        this.clear();
    }

    clear() {
        this.currentText = "";
        this.previousText = "";
        this.operation = undefined;
    }

    delete() { //function that deletes one space
        this.currentText = this.currentText.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentText.includes('.')) return; //skips if it is selected more than 1 "."
        if (this.currentText.length >= 25) return; // max number of digits
        this.currentText += number.toString(); //appends number to currentText
    }

    chooseOperation(operation) {
        if (this.currentText === '') return;
        if (this.currentText !== 0) {
            this.compute();
        }
        this.operation = operation;
        this.previousText = this.currentText;
        this.currentText = "";
    }

    compute() { //choose operation to make the computation.
        let computation
        const prev = parseFloat(this.previousText);
        const current = parseFloat(this.currentText);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;

            case 'x':
                computation = prev * current;
                break;

            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.currentText = computation;
        this.operation = undefined;
        this.previousText = '';
    }

    updateDisplay() {
        document.getElementById("current").innerHTML = this.currentText;
        if (this.operation != null) {
            document.getElementById("previous").innerHTML = `${this.previousText} ${this.operation}`;
        } else {
            document.getElementById("previous").innerHTML = '';
        }
    }
}

// selectors declaration
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalButton = document.querySelector('[data-equal]');
const deleteButton = document.querySelector('[data-delete]');
const acButton = document.querySelector('[data-ac]');
const previousText = document.querySelector('[data-previous]');
const currentText = document.querySelector('[data-current]');

//Creating new elements class
const calculator = new Calculator(previousText, currentText);

//event listener for click numbers
numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

//event listener for click operation buttons
operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

//event listener for result display
equalButton.addEventListener('click', button => {
    calculator.compute();
    calculator.updateDisplay();
});

//event listener for all clear
acButton.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

//event listener for delete button
deleteButton.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});

// On keyboard press

window.onkeyup = (e) => {
    //Regex
    const regExNum = /([\d.])+/;
    const regExOp = /([\+\-*/])+/
    const regExEqual = /(=)+/;

    const key = e.key;
    console.log(e.key);
    //Cases number or operation or equal or delete
    if (key.match(regExNum)) {
        calculator.appendNumber(key);
        calculator.updateDisplay();
    } else if (key.match(regExOp)) {
        calculator.chooseOperation(key);
        calculator.updateDisplay();
    } else if (key.match(regExEqual) || key === 'Enter') {
        calculator.compute();
        calculator.updateDisplay();
    } else if (key === 'Backspace') {
        calculator.delete();
        calculator.updateDisplay();
    } else if (key === 'Escape') {
        calculator.clear();
        calculator.updateDisplay();
    }
}