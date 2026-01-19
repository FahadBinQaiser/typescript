// User interface management system ( small project )
// 2) Array of 5 users created
var userFilledList = [
    { name: "Claudio", age: 17, email: "nigga@gmail.com", id: 1 },
    { name: "Nina", age: 20, email: "nina@gmail.com", id: 2 },
    { name: "Steve", age: 19, email: "steve@gmail.com", id: 3 },
    { name: "JohnWick", age: 36, email: "john@gmail.com", id: 4 },
    { name: "Harry Pottah", age: 32, email: "pottah@gmail.com", id: 5 },
];
// 3) Get Adults function
function getAdults(userList) {
    return userList.filter(function (user) { return user.age > 18; });
}
// 4) Find by Email function
function findByEmail(user, email) {
    return user.find(function (u) { return u.email === email; });
}
// 5) Return average of all users
function averageAge(userList) {
    var sum = 0;
    userList.forEach(function (num) { return (sum += num.age); });
    return sum / userList.length;
}
// 6) Execution of all functions
console.log(getAdults(userFilledList));
console.log(findByEmail(userFilledList, "nina@gmail.com"));
console.log(averageAge(userFilledList));
// function averageNumber(number: number[]): number {
//   let sum = 0;
//   number.forEach((num) => (sum += num));
//   return sum / number.length;
// }
// console.log(averageNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
