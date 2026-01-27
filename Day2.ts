import console = require("console");

interface Vehicle {
  brand: string;
  model: string;
  year: number;
}

interface Car extends Vehicle {
  doors: number;
  fuelType: string;
}

interface Motorcycle extends Vehicle {
  engineCC: number;
}

const myCar: Car = {
  brand: "BMW",
  model: "M4",
  year: 2023,
  doors: 4,
  fuelType: "Petrol",
};

const myBike: Motorcycle = {
  brand: "Harley",
  model: "Sportster",
  year: 2022,
  engineCC: 1200,
};

console.log(myCar);
console.log(myBike);

//  Understanding types

// type ID = string | number;
// type OrderStatus = "pending" | "approval" | "shipped" | "Cancelled";

// interface Order {
//   id: ID;
//   status: OrderStatus;
//   amount: number;
// }

// const order: Order = {
//   id: "ORD-123",
//   status: "pending",
//   amount: 99.99,
// };

// function updateOrderStatus(order: Order, newStatus: OrderStatus): Order {
//   return {
//     ...order,
//     status: newStatus,
//   };
// }
// const shipped = updateOrderStatus(order, "shipped");
// console.log(shipped);
// const person = { name: "John", age: 25 };
// const updated = { ...person, age: 30 };

// console.log(person.age);
// console.log(updated.age);

type ID = string | number;
type OrderStatus = "pending" | "approval" | "shipped" | "Cancelled";

interface Order {
  id: ID;
  status: OrderStatus;
  amount: number;
}
const order: Order = {
  id: "ABC-123",
  status: "pending",
  amount: 99.99,
};
function updateOrderStatus(order: Order, newStatus: OrderStatus): Order {
  return {
    ...order,
    status: newStatus,
  };
}

console.log(updateOrderStatus(order, "shipped"));

// Studying & and | operators

type Address = {
  city: string;
  country: string;
};
type Contact = {
  num: number;
  countryCode: number;
};
type person = Address & Contact;

const person1: person = {
  city: "Lahore",
  country: "Pakistan",
  num: +929,
  countryCode: +92,
};
console.log(person1);

function process(value: string | number) {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value.toFixed(2);
  }
}
console.log(process(4));
console.log(process("hello"));

type Circle = {
  kind: "circle";
  radius: number;
};
type Rectangle = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function formulaCalculator(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.width * shape.height;
  }
}

const circle: Circle = {
  kind: "circle",
  radius: 5,
};
const rectangle: Rectangle = {
  kind: "rectangle",
  width: 5,
  height: 10,
};

console.log(formulaCalculator(circle));
console.log(formulaCalculator(rectangle));
