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
