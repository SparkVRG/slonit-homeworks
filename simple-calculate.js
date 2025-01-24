function calculate(a, b, operationFunction) {
    return operationFunction(a, b);
}

let operationAdd = function(a, b) {
    return a + b;
}

let operationSubtract = function(a, b) {
    return a - b;
}

let operationMultiply = function(a, b) {
    return a * b;
}

let operationDivide = function(a, b) {
    return a / b;
}

let operations = {
    add: operationAdd,
    subtract: operationSubtract,
    multiply: operationMultiply,
    divide: operationDivide
};

let selectedOperation = 'multiply';
console.log(calculate(6, 3, operations[selectedOperation])); // умножение

selectedOperation = 'divide';
console.log(calculate(6, 3, operations[selectedOperation])); // деление

selectedOperation = 'subtract';
console.log(calculate(6, 3, operations[selectedOperation])); // вычитание

selectedOperation = 'add';
console.log(calculate(6, 3, operations[selectedOperation])); // сложение