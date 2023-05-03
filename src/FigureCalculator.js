class FigureCalculator {
  constructor(mathBasic) {
    this._mathBasic = mathBasic;
  }
  calculateRectanglePerimeter(...args) {
    if (args.length !== 2) {
      throw new Error("Parameter harus 2");
    }
    const [a, b] = args;
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Parameter must be of number type");
    }
    return this._mathBasic.multiply(2, this._mathBasic.add(a, b));
  }
  calculateRectangleArea(...args) {
    if (args.length !== 2) {
      throw new Error("Parameters should be two");
    }
    const [a, b] = args;
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Parameters should be number");
    }
    return this._mathBasic.multiply(a, b);
  }
  calculateTrianglePerimeter(...args) {
    if (args.length !== 3) {
      throw new Error("Parameter should be two");
    }
    const [a, b, c] = args;
    if (
      typeof a !== "number" ||
      typeof b !== "number" ||
      typeof c !== "number"
    ) {
      throw new Error("Parameter should be number data type");
    }
    return this._mathBasic.add(a, this._mathBasic.add(b, c));
  }
  calculateTriangleArea(...args) {
    if (args.length !== 2) {
      throw new Error("Parameters should be 2");
    }
    const [a, b] = args;
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Parameter should be number datatype");
    }
    return this._mathBasic.divide(this._mathBasic.multiply(a, b), 2);
  }
}

module.exports = FigureCalculator;
