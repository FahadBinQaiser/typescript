function add(a, b) {
    return a + b;
}
console.log(add(2, 4));
function person(name, age) {
    if (age) {
        return "Hey my name is ".concat(name, " and age is ").concat(age);
    }
    else {
        return "Hey my name is ".concat(name);
    }
}
console.log(person("Fahad", 17));
function multiply(x, y) {
    if (y === void 0) { y = 2; }
    return x * y;
}
console.log(multiply(5));
console.log(multiply(5, 10));
var divide = function (x, y) {
    return x / y;
};
console.log(divide(10, 2));
var logMessage = function (message) {
    console.log(message);
};
logMessage("This function shows nothing");
