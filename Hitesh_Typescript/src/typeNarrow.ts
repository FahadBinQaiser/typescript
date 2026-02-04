function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`;
  }
  return `Chai oder: ${kind}`;
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "small chai";
  } else if (size === "medium" || size === "large") {
    return "extra chai";
  }
  return `Chai order ${size}`;
}

// Extra type checking

class Bmw {
  model() {
    return "Bmw m4 gtr";
  }
}
class Mercedes {
  model() {
    return "Mercedes c63";
  }
}
function checkModel(model: Bmw | Mercedes) {
  if (model instanceof Bmw) {
    return model.model();
  }
}

type chaiOrder = {
  type: string;
  sugar: number;
};
function isChaiOrder(obj: any): obj is chaiOrder {
  return (
    typeof obj === "object" &&
    obj != null &&
    typeof obj.type === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveOrder(item: chaiOrder | string) {
  if (isChaiOrder(item)) {
    return `Serving ${item.type} and chai with ${item.sugar} sugar`;
  }
  return `2nd ${item}`;
}

function test(x: string | number) {
  if (typeof x === "string") {
    console.log("A");
  } else {
    console.log("B");
  }
}
console.log(test(42));
type Cat = { type: "cat"; meow: () => void };
type Dog = { type: "dog"; bark: () => void };
type Animal = Cat | Dog;

function makeSound(animal: Animal) {
  if (animal.type === "cat") {
    return "meow";
  }
  return "bark";
}

const pet: Dog = { type: "dog", bark: () => {} };
console.log(makeSound(pet));
function test2(x: string | null) {
  if (x) {
    console.log("A");
  } else {
    console.log("B");
  }
}
test2("");

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function getArea(shape: Shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius * shape.radius;
  }
  return shape.size * shape.size;
}

console.log(getArea({ kind: "square", size: 5 }));
