"use strict";
// function add(a: number, b: number): number {
//   return a + b;
// }
// console.log(add(2, 4));
Object.defineProperty(exports, "__esModule", { value: true });
var console = require("node:console");
var userFilledList = [
    { name: "Claudio", age: 17, email: "nigga@gmail.com", id: 1 },
    { name: "Nina", age: 20, email: "nina@gmail.com", id: 2 },
    { name: "Steve", age: 19, email: "steve@gmail.com", id: 3 },
    { name: "JohnWick", age: 36, email: "john@gmail.com", id: 4 },
    { name: "Harry Pottah", age: 32, email: "pottah@gmail.com", id: 5 },
];
// 1) Get Adults function
function getAdults(userList) {
    return userList.filter(function (user) { return user.age > 18; });
}
console.log(getAdults(userFilledList));
// 2) Find by Email function
function findByEmail(user, email) {
    return user.find(function (u) { return u.email === email; });
}
console.log(findByEmail(userFilledList, "nina@gmail.com"));
// 3) Return average of all users
function averageAge(userList) {
    var sum = 0;
    userList.forEach(function (num) { return (sum += num.age); });
    return sum / userList.length;
}
console.log(averageAge(userFilledList));
// function averageNumber(number: number[]): number {
//   let sum = 0;
//   number.forEach((num) => (sum += num));
//   return sum / number.length;
// }
// console.log(averageNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
