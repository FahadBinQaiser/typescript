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
function calculateAverage(numbers) {
    var sum = 0;
    numbers.forEach(function (num) { return (sum += num); });
    //   for (let num of numbers) {
    //     sum += num;
    //   }
    return sum / numbers.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
function findUserById(userList, id) {
    return userList.find(function (userFinded) { return userFinded.id == id; });
}
var userList = [
    { name: "Claudio", age: 17, id: 1 },
    { name: "Nina", age: 20, id: 2 },
    { name: "Steve", age: 19, id: 3 },
];
console.log(findUserById(userList, 2));
function isValidEmail(email) {
    return email.includes("@");
}
console.log(isValidEmail("fahadbinqaiser3gmail.com"));
function conversion(celsius) {
    return (celsius * 9 / 5) + 32;
}
console.log(conversion(32));
console.log(conversion(0)); // 32
console.log(conversion(100)); // 212
console.log(conversion(37)); // 98.6
console.log(conversion(-40)); // -40
