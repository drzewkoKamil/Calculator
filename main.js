const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => {
    if (b===0) {
        return "Cannot divide by 0"
    }
    return a / b
};

function operate(operator, a, b) {
    if (operator === "+") {
        return (add(a, b))
    } else if (operator === "-") {
        return (subtract(a, b))
    } else if (operator === "*") {
        return (multiply(a, b))
    } else if (operator === "/") {
        return (divide(a, b))
    } else {
    }
}

function updateValue(id) {
    if (check) {
        a = parseInt(document.getElementById("buttonText").textContent);
        displayValue = "";
        document.getElementById("buttonText").textContent = displayValue;
        check = false;
    }
    displayValue += id;
    document.getElementById("buttonText").textContent = displayValue
}

function clearValue(){
    document.getElementById("buttonText").textContent = ""
    displayValue = ""
    a = ""
    b = ""
    check = false
}

function operatorButton(id) {
    if (a !== "") {
        eqButtonClick();
        check = true;
        operator = id;
    } else {
        a = parseInt(document.getElementById("buttonText").textContent);
        if (isNaN(a)) {
            return
        }
        operator = id;
        displayValue = ""
        document.getElementById("buttonText").textContent = displayValue
    }
}

function eqButtonClick(){
    b = parseInt(document.getElementById("buttonText").textContent)
    console.log("a: ", a);
    console.log("b: ", b);
    if (isNaN(b)) {
        return
    }
    let result = operate(operator, a, b);
    console.log(result)
    clearValue()
    displayValue = result;
    document.getElementById("buttonText").textContent = displayValue;
}

let displayValue
let a
let b
let operator
let check
clearValue()
