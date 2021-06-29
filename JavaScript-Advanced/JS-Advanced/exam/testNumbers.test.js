let { expect, assert } = require("chai");
const { sumNumbers, numberChecker } = require("./testNumbers");
let testNumbers = require("./testNumbers");

describe("testNumbers", () => {
  describe("sumNumbers", () => {
    it("Should return undefined when both parameters are not numbers", () => {
      expect(testNumbers.sumNumbers("test", "foo")).to.equal(undefined);
    });

    it("Should return undefined when one parameter is not a number", () => {
      expect(testNumbers.sumNumbers("test", 2)).to.equal(undefined);
      expect(testNumbers.sumNumbers(2, "test")).to.equal(undefined);
    });

    it("Should return sum of both parameters when both are numbers", () => {
      expect(testNumbers.sumNumbers(1, 1)).to.equal("2.00");
    });

    it("Should return sum of both parameters when both are floats", () => {
      expect(testNumbers.sumNumbers(1.1, 2.1)).to.equal("3.20");
    });

    it("Should return sum of both parameters when both are negative integers", () => {
      expect(testNumbers.sumNumbers(-1, -1)).to.equal("-2.00");
    });

    it("Should return sum of both parameters when both are negative floats", () => {
      expect(testNumbers.sumNumbers(-3.1, -5.1)).to.equal("-8.20");
    });
  });

  describe("numberChecker", () => {
    it("Should thrown an error when the parameter is not a Number", () => {
      assert.throw(
        () => testNumbers.numberChecker("abc"),
        Error,
        "The input is not a number!"
      );
      assert.throw(
        () => testNumbers.numberChecker(undefined),
        Error,
        "The input is not a number!"
      );
      assert.throw(
        () => testNumbers.numberChecker("123b"),
        Error,
        "The input is not a number!"
      );
    });

    it("Should return even message when the number is even", () => {
      expect(testNumbers.numberChecker("2")).to.equal("The number is even!");
    });
    it("Should return odd message when the number is odd", () => {
      expect(testNumbers.numberChecker("1")).to.equal("The number is odd!");
    });
  });

  describe("averageSumArray", () => {
    it("Should return sum of each element", () => {
      expect(testNumbers.averageSumArray([1, 2, 3])).to.equal(2);
    });
  });
});
