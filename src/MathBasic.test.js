const MathBasic = require("./MathBasic");

describe("A MathBasi", () => {
  it("should contains, add, subtract, multiply, and divide function", () => {
    expect(MathBasic).toHaveProperty("add");
    expect(MathBasic).toHaveProperty("subtract");
    expect(MathBasic).toHaveProperty("multiply");
    expect(MathBasic).toHaveProperty("divide");
    expect(MathBasic.add).toBeInstanceOf(Function);
    expect(MathBasic.subtract).toBeInstanceOf(Function);
    expect(MathBasic.multiply).toBeInstanceOf(Function);
    expect(MathBasic.divide).toBeInstanceOf(Function);
  });

  describe("A add function", () => {
    it("should throw error when not given 2 parameters", () => {
      expect(() => MathBasic.add()).toThrowError();
      expect(() => MathBasic.add(1)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3)).toThrowError();
      expect(() => MathBasic.add(1, 2, 3, 4, 5)).toThrowError();
    });
    it("should throw error when given non-number parameters", () => {
      expect(() => MathBasic.add("1", "2")).toThrowError();
      expect(() => MathBasic.add(true, {})).toThrowError();
      expect(() => MathBasic.add(null, false)).toThrowError();
    });
    it("should return a + b when given two number parameters", () => {
      expect(MathBasic.add(2, 2)).toEqual(4);
      expect(MathBasic.add(16, 8)).toEqual(24);
      expect(MathBasic.add(3, 7)).toEqual(10);
    });
  });

  describe("A subtract function", () => {
    it("should throw error when not given 2 parameters", () => {
      expect(() => MathBasic.subtract()).toThrowError();
      expect(() => MathBasic.subtract(1)).toThrowError();
      expect(() => MathBasic.subtract(1, 2, 3)).toThrowError();
      expect(() => MathBasic.subtract(2, 3, 4, 5, 6)).toThrowError();
    });
    it("should throw error when not given number parameters", () => {
      expect(() => MathBasic.subtract("1", "4")).toThrowError();
      expect(() => MathBasic.subtract(true, false)).toThrowError();
      expect(() => MathBasic.subtract({}, null)).toThrowError();
      expect(() => MathBasic.subtract("1", false, null)).toThrowError();
    });
    it("should return a - b when give two number paramater ", () => {
      expect(MathBasic.subtract(1, 2)).toEqual(-1);
      expect(MathBasic.subtract(4, 2)).toEqual(2);
      expect(MathBasic.subtract(4, 4)).toEqual(0);
      expect(MathBasic.subtract(7, 6)).toEqual(1);
    });
  });

  describe("A multiply function", () => {
    it("should return an error when given more or less two parameter", () => {
      expect(() => MathBasic.multiply()).toThrowError();
      expect(() => MathBasic.multiply(1)).toThrowError();
      expect(() => MathBasic.multiply(2, 3, 4, 5)).toThrowError();
      expect(() => MathBasic.multiply(12, 3, 4)).toThrowError();
    });
    it("should return an error when given non number parameter", () => {
      expect(() => MathBasic.multiply("1", "23")).toThrowError();
      expect(() => MathBasic.multiply(false, true)).toThrowError();
      expect(() => MathBasic.multiply({}, [])).toThrowError();
      expect(() => MathBasic.multiply("1", [], false)).toThrowError();
    });
    it("should return a * b when given tow number parameter", () => {
      expect(MathBasic.multiply(2, 3)).toEqual(6);
      expect(MathBasic.multiply(3, 3)).toEqual(9);
      expect(MathBasic.multiply(3, 10)).toEqual(30);
      expect(MathBasic.multiply(100, 100)).toEqual(10000);
    });
  });

  describe("A divide function", () => {
    it("should return an error when give more or less two parameter", () => {
      expect(() => MathBasic.divide()).toThrowError();
      expect(() => MathBasic.divide(1)).toThrowError();
      expect(() => MathBasic.divide(2, 3, 4)).toThrowError();
      expect(() => MathBasic.divide(2, 3, 4, 5)).toThrowError();
    });
    it("should return an error when given non number parameter", () => {
      expect(() => MathBasic.divide("2", false)).toThrowError();
      expect(() => MathBasic.divide({}, true)).toThrowError();
      expect(() => MathBasic.divide([], null)).toThrowError();
      expect(() => MathBasic.divide("2", {}, [])).toThrowError();
    });

    it("should return a / b when given two number parameter", () => {
      expect(MathBasic.divide(1, 2)).toEqual(0.5);
      expect(MathBasic.divide(2, 2)).toEqual(1);
      expect(MathBasic.divide(10000, 2)).toEqual(5000);
      expect(MathBasic.divide(40, 2)).toEqual(20);
    });
  });
});
