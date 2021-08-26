function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    if (b===0) {
        return "Cannot divide by 0"
    }
    return a / b
}

function operate(operator, a, b) {
    switch (operator) {
        case "+":
            return(add(a,b))
            break;
        case "-":
            return(subtract(a,b))
            break;
        case "*":
            return(multiply(a,b))
            break;
        case "/":
            return(divide(a,b))
            break;
        default:
            break;
    }
}

let displayValue = document.getElementById("buttonText").textContent;

function updateValue(id) {
    displayValue += id
    document.getElementById("buttonText").textContent = displayValue
}

function clearValue(){
    document.getElementById("buttonText").textContent = ""
    displayValue = ""
    a = 0
    b = 0
    operator = ""
}

let a = 0
let b = 0
let operator = ""

function operatorButton(id) {
    a = parseInt(document.getElementById("buttonText").textContent);
    operator = id
    displayValue = ""
    document.getElementById("buttonText").textContent = displayValue
}

function eqButtonClick(){
    let b = parseInt(document.getElementById("buttonText").textContent)
    console.log(b);
    if (b!=NaN) {
        let result = operate(operator, a, b)
        operator = ""
        a = 0
        b = 0
        displayValue = result
        document.getElementById("buttonText").textContent = displayValue     
    }
    else{
        clearValue()
    }

}