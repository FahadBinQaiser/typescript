let union: string | number = "1million";
union = 1000000;

const shipment: "Passed" | "Failed" | "Error" = "Failed";

const order = [1, 2, 3, 4, 45, 6];
let currentOrder;
let x: string | number = "hello";
x = 123;
console.log(typeof x);

function process(val: string | number) {
  if (typeof val === "string") {
    return val.length;
  }
  return val;
}
console.log(process(5));
