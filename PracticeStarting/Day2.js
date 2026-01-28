"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var console = require("console");
var myCar = {
    brand: "BMW",
    model: "M4",
    year: 2023,
    doors: 4,
    fuelType: "Petrol",
};
var myBike = {
    brand: "Harley",
    model: "Sportster",
    year: 2022,
    engineCC: 1200,
};
console.log(myCar);
console.log(myBike);
var order = {
    id: "ABC-123",
    status: "pending",
    amount: 99.99,
};
function updateOrderStatus(order, newStatus) {
    return __assign(__assign({}, order), { status: newStatus });
}
console.log(updateOrderStatus(order, "shipped"));
var person1 = {
    city: "Lahore",
    country: "Pakistan",
    num: +929,
    countryCode: +92,
};
console.log(person1);
function process(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value.toFixed(2);
    }
}
console.log(process(4));
console.log(process("hello"));
function formulaCalculator(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    }
    else {
        return shape.width * shape.height;
    }
}
var circle = {
    kind: "circle",
    radius: 5,
};
var rectangle = {
    kind: "rectangle",
    width: 5,
    height: 10,
};
console.log(formulaCalculator(circle));
console.log(formulaCalculator(rectangle));
