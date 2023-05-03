const { serialize } = require("v8");
const MathBasic = require("./MathBasic");
const createServer = require("./createServer");
const FigureCalculator = require("./FigureCalculator");

describe("A HTTP Server", () => {
  describe("when GET /add", () => {
    it("should response with a status code of 200 and the payload value is addition result of a and b correctly", async () => {
      // Arrange
      const a = 10;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, "add");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/add/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(30);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /subtract", () => {
    it("should response with a status code of 200 and the payload value is subtract result of a and b correctly", async () => {
      // Arrange
      const a = 100;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, "subtract");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/subtract/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(80);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /multiply", () => {
    it("should response with a status code of 200 and the payload value is multiply result of a and b correctly", async () => {
      // Arrange
      const a = 100;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, "multiply");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/multiply/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(2000);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /divide", () => {
    it("should response with a status code of 200 and the payload value is divide result of length and width correctly", async () => {
      // Arrange
      const a = 100;
      const b = 20;
      const spyAdd = jest.spyOn(MathBasic, "divide");
      const server = createServer({ mathBasic: MathBasic });

      // Action
      const response = await server.inject({
        method: "GET",
        url: `/divide/${a}/${b}`,
      });

      // Assert
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(5);
      expect(spyAdd).toHaveBeenCalledWith(a, b);
    });
  });

  describe("when GET /rectangle/perimeter/{length}/{width}", () => {
    it("should response with a status code of 200 and the payload value is divide result of length and width correctly", async () => {
      const length = 20;
      const width = 10;
      const figureCalculator = new FigureCalculator(MathBasic);
      const server = createServer({ figureCalculator });
      const spyRectanglePerimater = jest.spyOn(
        figureCalculator,
        "calculateRectanglePerimeter"
      );

      const response = await server.inject({
        method: "GET",
        url: `/rectangle/perimeter/${length}/${width}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(60);
      expect(spyRectanglePerimater).toHaveBeenCalledWith(length, width);
    });
  });

  describe("when GET /rectangle/area/{length}/{width}", () => {
    it("should response with a status code of 200 and the payload value is calculateRectangleArea", async () => {
      const figureCalculator = new FigureCalculator(MathBasic);
      const length = 20;
      const width = 20;
      const server = createServer({ figureCalculator });
      const pysRectangleArea = jest.spyOn(
        figureCalculator,
        "calculateRectangleArea"
      );

      const response = await server.inject({
        method: "GET",
        url: `/rectangle/area/${length}/${width}`,
      });

      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(400);
      expect(pysRectangleArea).toHaveBeenCalledWith(length, width);
    });
  });

  describe("when GET /triangle/perimeter/{sideA}/{sideB}/{base}", () => {
    it("should response with a status code of 200 and the payload value is divide result of sideA, sideB and base correctly", async () => {
      const sideA = 10;
      const sideB = 20;
      const base = 10;
      const figureCalculator = new FigureCalculator(MathBasic);
      const server = createServer({ figureCalculator });
      const spycalculateTrianglePerimeter = jest.spyOn(
        figureCalculator,
        "calculateTrianglePerimeter"
      );

      const response = await server.inject({
        method: "GET",
        url: `/triangle/perimeter/${sideA}/${sideB}/${base}`,
      });

      const responsejson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responsejson.value).toEqual(40);
      expect(spycalculateTrianglePerimeter).toHaveBeenCalledWith(
        sideA,
        sideB,
        base
      );
    });
  });

  describe("when GET /triangle/area/{base}/{height}", () => {
    it("should response with a status code of 200 and the payload value is calculateTriangleArea result of base and height correctly", async () => {
      const base = 20;
      const height = 20;
      const figureCalculator = new FigureCalculator(MathBasic);
      const server = createServer({ figureCalculator });
      const spycalculateTriangleArea = jest.spyOn(
        figureCalculator,
        "calculateTriangleArea"
      );

      const response = await server.inject({
        method: "GET",
        url: `/triangle/area/${base}/${height}`,
      });
      const responseJson = JSON.parse(response.payload);
      expect(response.statusCode).toEqual(200);
      expect(responseJson.value).toEqual(200);
      expect(spycalculateTriangleArea).toHaveBeenCalledWith(base, height);
    });
  });
});
