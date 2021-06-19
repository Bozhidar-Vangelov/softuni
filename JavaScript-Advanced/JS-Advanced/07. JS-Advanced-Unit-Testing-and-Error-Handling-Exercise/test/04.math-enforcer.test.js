let { expect } = require("chai");
let mathEnforcer = require("../04.math-enforcer");

describe("mathEnforcer", () => {
  describe("addFive", () => {
    it("Should return undefined when the parameter is not a number", () => {
      expect(mathEnforcer.addFive("10")).to.equal(undefined);
      expect(mathEnforcer.addFive(undefined)).to.equal(undefined);
      expect(mathEnforcer.addFive(null)).to.equal(undefined);
      expect(mathEnforcer.addFive([1])).to.equal(undefined);
    });

    it("Should add 5 to the parameter when the parameter is number", () => {
      expect(mathEnforcer.addFive(1)).to.equal(6);
      expect(mathEnforcer.addFive(-9)).to.equal(-4);
      expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.1);
      expect(mathEnforcer.addFive(1.1 + 2.2)).to.be.closeTo(8.3, 0.1);
    });
  });

  describe("subtractTen", () => {
    it("Should return undefined when the parameter is not a number", () => {
      expect(mathEnforcer.subtractTen("1")).to.equal(undefined);
      expect(mathEnforcer.subtractTen(undefined)).to.equal(undefined);
      expect(mathEnforcer.subtractTen(null)).to.equal(undefined);
      expect(mathEnforcer.subtractTen([1])).to.equal(undefined);
    });

    it("Should subtract 10 to the parameter when the parameter is number", () => {
      expect(mathEnforcer.subtractTen(1)).to.equal(-9);
      expect(mathEnforcer.subtractTen(-5)).to.equal(-15);
      expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.1);
      expect(mathEnforcer.subtractTen(1.1 + 2.2)).to.be.closeTo(-6.7, 0.1);
    });
  });

  describe("sum", () => {
    it("Should return undefined when first parameter is not a number", () => {
      expect(mathEnforcer.sum("test", 1)).to.equal(undefined);
      expect(mathEnforcer.sum(["test"], 2)).to.equal(undefined);
      expect(mathEnforcer.sum(null, 5)).to.equal(undefined);
      expect(mathEnforcer.sum(undefined, 10)).to.equal(undefined);
    });

    it("Should return undefined when second parameter is not a number", () => {
      expect(mathEnforcer.sum(10, "bacon")).to.equal(undefined);
      expect(mathEnforcer.sum(12, ["array"])).to.equal(undefined);
      expect(mathEnforcer.sum(11, null)).to.equal(undefined);
      expect(mathEnforcer.sum(7, undefined)).to.equal(undefined);
    });

    it("Should sum both parameters when they are with correct value and type", () => {
      expect(mathEnforcer.sum(10, 5)).to.equal(15);
      expect(mathEnforcer.sum(-15, -7)).to.equal(-22);
      expect(mathEnforcer.sum(0, 10)).to.equal(10);
      expect(mathEnforcer.sum(3.3, 5.3)).to.be.closeTo(8.6, 0.1);
      expect(mathEnforcer.sum(3.3 + 1.1, 5.3)).to.be.closeTo(9.7, 0.1);
      expect(mathEnforcer.sum(3.3 + 1.1, 2.2 + 2.2)).to.be.closeTo(8.8, 0.1);
    });
  });
});
