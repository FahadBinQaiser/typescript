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
