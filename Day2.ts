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
